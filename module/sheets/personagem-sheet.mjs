export class ChronosferaPersonagemSheet extends ActorSheet {
    
    // Configurações da Janela
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["chronosfera", "sheet", "actor"],
            template: "systems/chronosfera/templates/actor/personagem-sheet.hbs",
            width: 700,
            height: 700,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "atributos" }]
        });
    }

    // Prepara os dados para o HTML (Handlebars) ler
    getData() {
        const context = super.getData();
        context.system = context.actor.system;
        return context;
    }
}