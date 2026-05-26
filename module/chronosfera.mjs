import { ChronosferaPersonagemSheet } from "./sheets/personagem-sheet.mjs";

Hooks.once("init", function() {
    console.log("Chronosfera RPG | Inicializando a Linha do Tempo...");

    // Remove a ficha padrão feia do Foundry
    Actors.unregisterSheet("core", ActorSheet);
    
    // Registra a nossa ficha bonita!
    Actors.registerSheet("chronosfera", ChronosferaPersonagemSheet, {
        types: ["personagem"],
        makeDefault: true
    });
});