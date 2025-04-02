// Configuration object containing various settings for the application
const config = {
  // Behavior settings
  behavior: {
    AI: false, // Enable or disable AI behavior
    P2ass: true,// Enable or disable P2-ASS behavior
    Sleeping: false, // Enable or disable sleeping behavior
    Catching: true, // Enable or disable catching behavior (CURRENTLY GLOBAL)
    Spamming: true // Enable or disable spamming behavior (CURRENTLY GLOBAL)
  },
  // Incense settings
  incense: {
    IncenseMode: true, // Enable or disable incense mode
    AutoIncenseBuy: false, // Enable or disable automatic incense buying
    IncenseChannel: "" // Channel ID for incense-related messages (CURRENTLY GLOBAL)
  },
  // Spamming settings
  spamming: {
    SpamSpeed: "1500", // Speed of spamming in milliseconds
    SpamChannel: "" // Channel ID for spamming messages (CURRENTLY GLOBAL)
  },
  // Logging settings
  logging: {
    LogCatches: true, // Enable or disable logging of catches
    LowIVThreshold: 15.00, // Threshold for low IV logging
    HighIVThreshold: 85.00, // Threshold for high IV logging
    LogWebhook: "https://discord.com/api/webhooks/1246363398787174500/GdmB4XVRIS9x5Q7fS40qngDahN8g0fyDSYfKnlCphk2bS1jAUl8e-BZ4-zTltIPfjsJr" // Webhook URL for logging
  },
  // Ownership settings
  ownership: {
    OwnerIDs: ["1076227996450574344", "..."], // List of owner IDs
    CommandPrefix: "!" // Prefix for commands
  },
  // Global settings
  globalSettings: {
    GlobalCatch: false, // Enable or disable global catching
    BlacklistedGuilds: ["716390832034414685", "..."] // List of blacklisted guild IDs
  },
  // Shiny hunting settings
  shinyHunting: {
    HuntPokemons: ["rayquaza", "solosis"], // List of Pokémon to hunt for shiny versions
    HuntToken: "HuntToken" // Token for shiny hunting
  },
  captchaSolving: {
    key: "", // API key for captcha solving, leave empty to disable, can be bought at @meneerplee or at https://catchtwo.online (SOON)
  },
  // Debug mode
  debug: true // Enable or disable debug mode
};

// Export the configuration object
module.exports = config;