import { ChronosferaActor } from "./documents/actor.mjs";
import { ChronosferaPersonagemSheet } from "./sheets/personagem-sheet.mjs";

Hooks.once("init", function() {
    console.log("Chronosfera RPG | Inicializando a Linha do Tempo...");

    // Registra o nosso processador de dados matemáticos customizado
    CONFIG.Actor.documentClass = ChronosferaActor;

    // Desregistra as fichas padrões do sistema do Foundry
    Actors.unregisterSheet("core", ActorSheet);
    
    // Registra a folha visual Handlebars
    Actors.registerSheet("chronosfera", ChronosferaPersonagemSheet, {
        types: ["personagem"],
        makeDefault: true
    });
});