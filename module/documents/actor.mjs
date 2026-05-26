export class ChronosferaActor extends Actor {
    
    // Esta função roda sempre que a ficha sofre qualquer alteração
    prepareDerivedData() {
        super.prepareDerivedData();
        const actorData = this;
        const system = actorData.system;

        // 1. Calcular o Bônus de Fibonacci para cada um dos 7 atributos
        for (let [key, attr] of Object.entries(system.atributos)) {
            attr.bonus = this._calcularFibonacci(attr.valor_bruto);
        }

        // 2. Calcular PV e PM Máximos baseados nos bônus e valores de classe
        system.status.pv.max = system.atributos.vigor.valor_bruto + (system.status.pv.fixo_classe || 0);
        system.status.pm.max = system.atributos.magia.valor_bruto + (system.status.pm.fixo_classe || 0);

        // 3. Calcular ND de Esquiva (8 + Bônus de Esquiva)
        system.status.defesas.nd_esquiva = 8 + system.atributos.esquiva.bonus;

        // 4. Calcular ND de Defesa Mágica (8 + Bônus de Esquiva + Bônus de Defesa Mágica)
        system.status.defesas.nd_defesa_magica = 8 + system.atributos.esquiva.bonus + system.atributos.defesa_magica.bonus;
    }

    // A Curva Exponencial de Fibonacci do Chronosfera RPG
    _calcularFibonacci(valor) {
        if (valor <= 5) return 0;
        if (valor <= 13) return 1;
        if (valor <= 26) return 2;
        if (valor <= 47) return 3;
        if (valor <= 81) return 4;
        return 5;
    }
}