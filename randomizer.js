const items = {
    survivors: [
        {name: "Acrid", sotv: false, sots: false, image: "survivors/Acrid.webp"},
        {name: "Artificer", sotv: false, sots: false, image: "survivors/Artificer.webp"},
        {name: "Bandit", sotv: false, sots: false, image: "survivors/Bandit.webp"},
        {name: "Captain", sotv: false, sots: false, image: "survivors/Captain.webp"},
        {name: "Chef", sotv: false, sots: true, image: "survivors/CHEF.webp"},
        {name: "Commando", sotv: false, sots: false, image: "survivors/Commando.webp"},
        {name: "Engineer", sotv: false, sots: false, image: "survivors/Engineer.webp"},
        {name: "False Son", sotv: false, sots: true, image: "survivors/False_Son.webp"},
        {name: "Heretic", sotv: false, sots: false, image: "survivors/Heretic.webp"},
        {name: "Huntress", sotv: false, sots: false, image: "survivors/Huntress.webp"},
        {name: "Loader", sotv: false, sots: false, image: "survivors/Loader.webp"},
        {name: "Mercenary", sotv: false, sots: false, image: "survivors/Mercenary.webp"},
        {name: "MUL-T", sotv: false, sots: false, image: "survivors/MUL-T.webp"},
        {name: "Railgunner", sotv: true, sots: false, image: "survivors/Railgunner.webp"},
        {name: "Seeker", sotv: false, sots: true, image: "survivors/Seeker.webp"},
        {name: "REX", sotv: false, sots: false, image: "survivors/REX.webp"},
        {name: "Void Fiend", sotv: true, sots: false, image: "survivors/Void_Fiend.webp"}
    ],
    white: [
        {name: "Armor-Piercing Rounds", sotv: false, sots: false, image: "itemsWhite/Armor-Piercing_Rounds.webp"},
        {name: "Backup Magazine", sotv: false, sots: false, image: "itemsWhite/Backup_Magazine.webp"},
        {name: "Bison Steak", sotv: false, sots: false, image: "itemsWhite/Bison_Steak.webp"},
        {name: "Bolstering Lantern", sotv: false, sots: true, image: "itemsWhite/Bolstering_Lantern.webp"},
        {name: "Bundle of Fireworks", sotv: false, sots: false, image: "itemsWhite/Bundle_of_Fireworks.webp"},
        {name: "Bustling Fungus", sotv: false, sots: false, image: "itemsWhite/Bustling_Fungus.webp"},
        {name: "Cautious Slug", sotv: false, sots: false, image: "itemsWhite/Cautious_Slug.webp"},
        {name: "Chronic Expansion", sotv: false, sots: true, image: "itemsWhite/Chronic_Expansion.webp"},
        {name: "Crowbar", sotv: false, sots: false, image: "itemsWhite/Crowbar.webp"},
        {name: "Delicate Watch", sotv: true, sots: false, image: "itemsWhite/Delicate_Watch.webp"},
        {name: "Elusive Antlers", sotv: false, sots: true, image: "itemsWhite/Elusive_Antlers.webp"},
        {name: "Energy Drink", sotv: false, sots: false, image: "itemsWhite/Energy_Drink.webp"},
        {name: "Focus Crystal", sotv: false, sots: false, image: "itemsWhite/Focus_Crystal.webp"},
        {name: "Gasoline", sotv: false, sots: false, image: "itemsWhite/Gasoline.webp"},
        {name: "Item Scrap, White", sotv: false, sots: false, image: "itemsWhite/Item_Scrap,_White.webp"},
        {name: "Lens-Maker's Glasses", sotv: false, sots: false, image: "itemsWhite/Lens-Maker's_Glasses.webp"},
        {name: "Medkit", sotv: false, sots: false, image: "itemsWhite/Medkit.webp"},
        {name: "Mocha", sotv: true, sots: false, image: "itemsWhite/Mocha.webp"},
        {name: "Monster Tooth", sotv: false, sots: false, image: "itemsWhite/Monster_Tooth.webp"},
        {name: "Oddly-shaped Opal", sotv: true, sots: false, image: "itemsWhite/Oddly-shaped_Opal.webp"},
        {name: "Paul's Goat Hoof", sotv: false, sots: false, image: "itemsWhite/Paul's_Goat_Hoof.webp"},
        {name: "Personal Shield Generator", sotv: false, sots: false, image: "itemsWhite/Personal_Shield_Generator.webp"},
        {name: "Power Elixir", sotv: true, sots: false, image: "itemsWhite/Power_Elixir.webp"},
        {name: "Repulsion Armor Plate", sotv: false, sots: false, image: "itemsWhite/Repulsion_Armor_Plate.webp"},
        {name: "Roll of Pennies", sotv: true, sots: false, image: "itemsWhite/Roll_of_Pennies.webp"},
        {name: "Rusted Key", sotv: false, sots: false, image: "itemsWhite/Rusted_Key.webp"},
        {name: "Soldier's Syringe", sotv: false, sots: false, image: "itemsWhite/Soldier's_Syringe.webp"},
        {name: "Sticky Bomb", sotv: false, sots: false, image: "itemsWhite/Sticky_Bomb.webp"},
        {name: "Stun Grenade", sotv: false, sots: false, image: "itemsWhite/Stun_Grenade.webp"},
        {name: "Topaz Brooch", sotv: false, sots: false, image: "itemsWhite/Topaz_Brooch.webp"},
        {name: "Tougher Times", sotv: false, sots: false, image: "itemsWhite/Tougher_Times.webp"},
        {name: "Tri-Tip Dagger", sotv: false, sots: false, image: "itemsWhite/Tri-Tip_Dagger.webp"},
        {name: "Warbanner", sotv: false, sots: false, image: "itemsWhite/Warbanner.webp"},
        {name: "Warped Echo", sotv: false, sots: true, image: "itemsWhite/Warped_Echo.webp"}
    ],
    green: [
        {name: "AtG Missile Mk. 1", sotv: false, sots: false, image: "itemsGreen/AtG_Missile_Mk._1.webp"},
        {name: "Bandolier", sotv: false, sots: false, image: "itemsGreen/Bandolier.webp"},
        {name: "Berzerker's Pauldron", sotv: false, sots: false, image: "itemsGreen/Berzerker's_Pauldron.webp"},
        {name: "Breaching Fin", sotv: false, sots: true, image: "itemsGreen/Breaching_Fin.webp"},
        {name: "Chance Doll", sotv: false, sots: true, image: "itemsGreen/Chance_Doll.webp"},
        {name: "Chronobauble", sotv: false, sots: false, image: "itemsGreen/Chronobauble.webp"},
        {name: "Death Mark", sotv: false, sots: false, image: "itemsGreen/Death_Mark.webp"},
        {name: "Fuel Cell", sotv: false, sots: false, image: "itemsGreen/Fuel_Cell.webp"},
        {name: "Ghor's Tome", sotv: false, sots: false, image: "itemsGreen/Ghor's_Tome.webp"},
        {name: "Harvester's Scythe", sotv: false, sots: false, image: "itemsGreen/Harvester's_Scythe.webp"},
        {name: "Hopoo Feather", sotv: false, sots: false, image: "itemsGreen/Hopoo_Feather.webp"},
        {name: "Hunter's Harpoon", sotv: true, sots: false, image: "itemsGreen/Hunter's_Harpoon.webp"},
        {name: "Ignition Tank", sotv: true, sots: false, image: "itemsGreen/Ignition_Tank.webp"},
        {name: "Infusion", sotv: false, sots: false, image: "itemsGreen/Infusion.webp"},
        {name: "Item Scrap, Green", sotv: false, sots: false, image: "itemsGreen/Item_Scrap,_Green.webp"},
        {name: "Kjaro's Band", sotv: false, sots: false, image: "itemsGreen/Kjaro's_Band.webp"},
        {name: "Leeching Seed", sotv: false, sots: false, image: "itemsGreen/Leeching_Seed.webp"},
        {name: "Lepton Daisy", sotv: false, sots: false, image: "itemsGreen/Lepton_Daisy.webp"},
        {name: "Luminous Shot", sotv: false, sots: true, image: "itemsGreen/Luminous_Shot.webp"},
        {name: "Noxious Thorn", sotv: false, sots: true, image: "itemsGreen/Noxious_Thorn.webp"},
        {name: "Old Guillotine", sotv: false, sots: false, image: "itemsGreen/Old_Guillotine.webp"},
        {name: "Old War Stealthkit", sotv: false, sots: false, image: "itemsGreen/Old_War_Stealthkit.webp"},
        {name: "Prayer Beads", sotv: false, sots: true, image: "itemsGreen/Prayer_Beads.webp"},
        {name: "Predatory Instincts", sotv: false, sots: false, image: "itemsGreen/Predatory_Instincts.webp"},
        {name: "Razorwire", sotv: false, sots: false, image: "itemsGreen/Razorwire.webp"},
        {name: "Red Whip", sotv: false, sots: false, image: "itemsGreen/Red_Whip.webp"},
        {name: "Regenerating Scrap", sotv: true, sots: false, image: "itemsGreen/Regenerating_Scrap.webp"},
        {name: "Rose Buckler", sotv: false, sots: false, image: "itemsGreen/Rose_Buckler.webp"},
        {name: "Runald's Band", sotv: false, sots: false, image: "itemsGreen/Runald's_Band.webp"},
        {name: "Sale Star", sotv: false, sots: true, image: "itemsGreen/Sale_Star.webp"},
        {name: "Shipping Request Form", sotv: true, sots: false, image: "itemsGreen/Shipping_Request_Form.webp"},
        {name: "Shuriken", sotv: true, sots: false, image: "itemsGreen/Shuriken.webp"},
        {name: "Squid Polyp", sotv: false, sots: false, image: "itemsGreen/Squid_Polyp.webp"},
        {name: "Ukulele", sotv: false, sots: false, image: "itemsGreen/Ukulele.webp"},
        {name: "Unstable Transmitter", sotv: false, sots: true, image: "itemsGreen/Unstable_Transmitter.webp"},
        {name: "War Horn", sotv: false, sots: false, image: "itemsGreen/War_Horn.webp"},
        {name: "Wax Quail", sotv: false, sots: false, image: "itemsGreen/Wax_Quail.webp"},
        {name: "Will-o'-the-wisp", sotv: false, sots: false, image: "itemsGreen/Will-o'-the-wisp.webp"}
    ],
    red: [
        {name: "57 Leaf Clover", sotv: false, sots: false, image: "itemsRed/57_Leaf_Clover.webp"},
        {name: "Aegis", sotv: false, sots: false, image: "itemsRed/Aegis.webp"},
        {name: "Alien Head", sotv: false, sots: false, image: "itemsRed/Alien_Head.webp"},
        {name: "Ben's Raincoat", sotv: true, sots: false, image: "itemsRed/Ben's_Raincoat.webp"},
        {name: "Bottled Chaos", sotv: true, sots: false, image: "itemsRed/Bottled_Chaos.webp"},
        {name: "Brainstalks", sotv: false, sots: false, image: "itemsRed/Brainstalks.webp"},
        {name: "Brilliant Behemoth", sotv: false, sots: false, image: "itemsRed/Brilliant_Behemoth.webp"},
        {name: "Ceremonial Dagger", sotv: false, sots: false, image: "itemsRed/Ceremonial_Dagger.webp"},
        {name: "Defensive Microbots", sotv: false, sots: false, image: "itemsRed/Defensive_Microbots.webp"},
        {name: "Dio's Best Friend", sotv: false, sots: false, image: "itemsRed/Dio's_Best_Friend.webp"},
        {name: "Electric Boomerang", sotv: false, sots: true, image: "itemsRed/Electric_Boomerang.webp"},
        {name: "Frost Relic", sotv: false, sots: false, image: "itemsRed/Frost_Relic.webp"},
        {name: "Growth Nectar", sotv: false, sots: true, image: "itemsRed/Growth_Nectar.webp"},
        {name: "H3AD-5T v2", sotv: false, sots: false, image: "itemsRed/H3AD-5T_v2.webp"},
        {name: "Happiest Mask", sotv: false, sots: false, image: "itemsRed/Happiest_Mask.webp"},
        {name: "Hardlight Afterburner", sotv: false, sots: false, image: "itemsRed/Hardlight_Afterburner.webp"},
        {name: "Interstellar Desk Plant", sotv: false, sots: false, image: "itemsRed/Interstellar_Desk_Plant.webp"},
        {name: "Item Scrap, Red", sotv: false, sots: false, image: "itemsRed/Item_Scrap,_Red.webp"},
        {name: "Laser Scope", sotv: true, sots: false, image: "itemsRed/Laser_Scope.webp"},
        {name: "N'kuhana's Opinion", sotv: false, sots: false, image: "itemsRed/N'kuhana's_Opinion.webp"},
        {name: "Pocket I.C.B.M.", sotv: true, sots: false, image: "itemsRed/Pocket_I.C.B.M..webp"},
        {name: "Rejuvenation Rack", sotv: false, sots: false, image: "itemsRed/Rejuvenation_Rack.webp"},
        {name: "Resonance Disc", sotv: false, sots: false, image: "itemsRed/Resonance_Disc.webp"},
        {name: "Runic Lens", sotv: false, sots: true, image: "itemsRed/Runic_Lens.webp"},
        {name: "Sentient Meat Hook", sotv: false, sots: false, image: "itemsRed/Sentient_Meat_Hook.webp"},
        {name: "Shattering Justice", sotv: false, sots: false, image: "itemsRed/Shattering_Justice.webp"},
        {name: "Sonorous Whispers", sotv: false, sots: true, image: "itemsRed/Sonorous_Whispers.webp"},
        {name: "Soulbound Catalyst", sotv: false, sots: false, image: "itemsRed/Soulbound_Catalyst.webp"},
        {name: "Spare Drone Parts", sotv: true, sots: false, image: "itemsRed/Spare_Drone_Parts.webp"},
        {name: "Symbiotic Scorpion", sotv: true, sots: false, image: "itemsRed/Symbiotic_Scorpion.webp"},
        {name: "Unstable Tesla Coil", sotv: false, sots: false, image: "itemsRed/Unstable_Tesla_Coil.webp"},
        {name: "Wake of Vultures", sotv: false, sots: false, image: "itemsRed/Wake_of_Vultures.webp"},
        {name: "War Bonds", sotv: false, sots: true, image: "itemsRed/War_Bonds.webp"}
    ],
    yellow: [
        {name: "Charged Perforator", sotv: false, sots: false, image: "itemsYellow/Charged_Perforator.webp"},
        {name: "Defense Nucleus", sotv: true, sots: false, image: "itemsYellow/Defense_Nucleus.webp"},
        {name: "Empathy Cores", sotv: false, sots: false, image: "itemsYellow/Empathy_Cores.webp"},
        {name: "Genesis Loop", sotv: false, sots: false, image: "itemsYellow/Genesis_Loop.webp"},
        {name: "Halcyon Seed", sotv: false, sots: false, image: "itemsYellow/Halcyon_Seed.webp"},
        {name: "Irradiant Pearl", sotv: false, sots: false, image: "itemsYellow/Irradiant_Pearl.webp"},
        {name: "Item Scrap, Yellow", sotv: false, sots: false, image: "itemsYellow/Item_Scrap,_Yellow.webp"},
        {name: "Little Disciple", sotv: false, sots: false, image: "itemsYellow/Little_Disciple.webp"},
        {name: "Mired Urn", sotv: false, sots: false, image: "itemsYellow/Mired_Urn.webp"},
        {name: "Molten Perforator", sotv: false, sots: false, image: "itemsYellow/Molten_Perforator.webp"},
        {name: "Pearl", sotv: false, sots: false, image: "itemsYellow/Pearl.webp"},
        {name: "Planula", sotv: false, sots: false, image: "itemsYellow/Planula.webp"},
        {name: "Queen's Gland", sotv: false, sots: false, image: "itemsYellow/Queen's_Gland.webp"},
        {name: "Shatterspleen", sotv: false, sots: false, image: "itemsYellow/Shatterspleen.webp"},
        {name: "Titanic Knurl", sotv: false, sots: false, image: "itemsYellow/Titanic_Knurl.webp"}
    ],
    lunar: [
        {name: "Brittle Crown", sotv: false, sots: false, image: "itemsLunar/Brittle_Crown.webp"},
        {name: "Corpsebloom", sotv: false, sots: false, image: "itemsLunar/Corpsebloom.webp"},
        {name: "Defiant Gouge", sotv: false, sots: false, image: "itemsLunar/Defiant_Gouge.webp"},
        {name: "Egocentrism", sotv: true, sots: false, image: "itemsLunar/Egocentrism.webp"},
        {name: "Essence of Heresy", sotv: false, sots: false, image: "itemsLunar/Essence_of_Heresy.webp"},
        {name: "Eulogy Zero", sotv: true, sots: false, image: "itemsLunar/Eulogy_Zero.webp"},
        {name: "Focused Convergence", sotv: false, sots: false, image: "itemsLunar/Focused_Convergence.webp"},
        {name: "Gesture of the Drowned", sotv: false, sots: false, image: "itemsLunar/Gesture_of_the_Drowned.webp"},
        {name: "Hooks of Heresy", sotv: false, sots: false, image: "itemsLunar/Hooks_of_Heresy.webp"},
        {name: "Light Flux Pauldron", sotv: true, sots: false, image: "itemsLunar/Light_Flux_Pauldron.webp"},
        {name: "Mercurial Rachis", sotv: false, sots: false, image: "itemsLunar/Mercurial_Rachis.webp"},
        {name: "Purity", sotv: false, sots: false, image: "itemsLunar/Purity.webp"},
        {name: "Shaped Glass", sotv: false, sots: false, image: "itemsLunar/Shaped_Glass.webp"},
        {name: "Strides of Heresy", sotv: false, sots: false, image: "itemsLunar/Strides_of_Heresy.webp"},
        {name: "Transcendence", sotv: false, sots: false, image: "itemsLunar/Transcendence.webp"},
        {name: "Visions of Heresy", sotv: false, sots: false, image: "itemsLunar/Visions_of_Heresy.webp"}
    ],
    voidWhite: [
        {name: "Encrusted Key", sotv: true, sots: false, image: "itemsVoid/Encrusted_Key.webp"},
        {name: "Lost Seer's Lenses", sotv: true, sots: false, image: "itemsVoid/Lost_Seer's_Lenses.webp"},
        {name: "Needletick", sotv: true, sots: false, image: "itemsVoid/Needletick.webp"},
        {name: "Safer Spaces", sotv: true, sots: false, image: "itemsVoid/Safer_Spaces.webp"},
        {name: "Weeping Fungus", sotv: true, sots: false, image: "itemsVoid/Weeping_Fungus.webp"}
    ],
    voidGreen: [
        {name: "Voidsent Flame", sotv: true, sots: false, image: "itemsVoid/Voidsent_Flame.webp"},
        {name: "Singularity Band", sotv: true, sots: false, image: "itemsVoid/Singularity_Band.webp"},
        {name: "Polylute", sotv: true, sots: false, image: "itemsVoid/Polylute.webp"},
        {name: "Plasma Shrimp", sotv: true, sots: false, image: "itemsVoid/Plasma_Shrimp.webp"},
        {name: "Tentabauble", sotv: true, sots: false, image: "itemsVoid/Tentabauble.webp"},
        {name: "Lysate Cell", sotv: true, sots: false, image: "itemsVoid/Lysate_Cell.webp"}
    ],
    voidRed: [
        {name: "Pluripotent Larva", sotv: true, sots: false, image: "itemsVoid/Pluripotent_Larva.webp"},
        {name: "Benthic Bloom", sotv: true, sots: false, image: "itemsVoid/Benthic_Bloom.webp"}
    ],
    voidYellow: [
        {name: "Newly Hatched Zoea", sotv: true, sots: false, image: "itemsVoid/Newly_Hatched_Zoea.webp"}
    ],
    equipment: [
        {name: "Blast Shower", sotv: false, sots: false, image: "itemsEquipment/Blast_Shower.webp"},
        {name: "Disposable Missile Launcher", sotv: false, sots: false, image: "itemsEquipment/Disposable_Missile_Launcher.webp"},
        {name: "Eccentric Vase", sotv: false, sots: false, image: "itemsEquipment/Eccentric_Vase.webp"},
        {name: "Executive Card", sotv: true, sots: false, image: "itemsEquipment/Executive_Card.webp"},
        {name: "Foreign Fruit", sotv: false, sots: false, image: "itemsEquipment/Foreign_Fruit.webp"},
        {name: "Forgive Me Please", sotv: false, sots: false, image: "itemsEquipment/Forgive_Me_Please.webp"},
        {name: "Fuel Array", sotv: false, sots: false, image: "itemsEquipment/Fuel_Array.webp"},
        {name: "Gnarled Woodsprite", sotv: false, sots: false, image: "itemsEquipment/Gnarled_Woodsprite.webp"},
        {name: "Goobo Jr.", sotv: true, sots: false, image: "itemsEquipment/Goobo_Jr.webp"},
        {name: "Gorag's Opus", sotv: false, sots: false, image: "itemsEquipment/Gorag's_Opus.webp"},
        {name: "Jade Elephant", sotv: false, sots: false, image: "itemsEquipment/Jade_Elephant.webp"},
        {name: "Milky Chrysalis", sotv: false, sots: false, image: "itemsEquipment/Milky_Chrysalis.webp"},
        {name: "Molotov (6-Pack)", sotv: true, sots: false, image: "itemsEquipment/Molotov_(6-Pack).webp"},
        {name: "Ocular HUD", sotv: false, sots: false, image: "itemsEquipment/Ocular_HUD.webp"},
        {name: "Preon Accumulator", sotv: false, sots: false, image: "itemsEquipment/Preon_Accumulator.webp"},
        {name: "Primordial Cube", sotv: false, sots: false, image: "itemsEquipment/Primordial_Cube.webp"},
        {name: "Radar Scanner", sotv: false, sots: false, image: "itemsEquipment/Radar_Scanner.webp"},
        {name: "Recycler", sotv: false, sots: false, image: "itemsEquipment/Recycler.webp"},
        {name: "Remote Caffeinator", sotv: true, sots: false, image: "itemsEquipment/Remote_Caffeinator.webp"},
        {name: "Royal Capacitor", sotv: false, sots: false, image: "itemsEquipment/Royal_Capacitor.webp"},
        {name: "Sawmerang", sotv: false, sots: false, image: "itemsEquipment/Sawmerang.webp"},
        {name: "Seed of Life", sotv: false, sots: true, image: "itemsEquipment/Seed_of_Life.webp"},
        {name: "Seed of Life (Consumed)", sotv: false, sots: true, image: "itemsEquipment/Seed_of_Life_(Consumed).webp"},
        {name: "Super Massive Leech", sotv: false, sots: false, image: "itemsEquipment/Super_Massive_Leech.webp"},
        {name: "The Back-up", sotv: false, sots: false, image: "itemsEquipment/The_Back-up.webp"},
        {name: "The Crowdfunder", sotv: false, sots: false, image: "itemsEquipment/The_Crowdfunder.webp"},
        {name: "Trophy Hunter's Tricorn", sotv: true, sots: false, image: "itemsEquipment/Trophy_Hunter's_Tricorn.webp"},
        {name: "Trophy Hunter's Tricorn (Consumed)", sotv: true, sots: false, image: "itemsEquipment/Trophy_Hunter's_Tricorn_(Consumed).webp"},
        {name: "Volcanic Egg", sotv: false, sots: false, image: "itemsEquipment/Volcanic_Egg.webp"}
    ],
    equipmentLunar: [
        {name: "Effigy of Grief", sotv: false, sots: false, image: "itemsEquipmentLunar/Effigy_of_Grief.webp"},
        {name: "Glowing Meteorite", sotv: false, sots: false, image: "itemsEquipmentLunar/Glowing_Meteorite.webp"},
        {name: "Helfire Tincture", sotv: false, sots: false, image: "itemsEquipmentLunar/Helfire_Tincture.webp"},
        {name: "Spinel Tonic", sotv: false, sots: false, image: "itemsEquipmentLunar/Spinel_Tonic.webp"}
    ],
    equipmentElite: [
        {name: "Aurelionite's Blessing", sotv: false, sots: true, image: "itemsEquipmentElite/Aurelionite's_Blessing.webp"},
        {name: "Her Biting Embrace", sotv: false, sots: false, image: "itemsEquipmentElite/Her_Biting_Embrace.webp"},
        {name: "His Reassurance", sotv: true, sots: false, image: "itemsEquipmentElite/His_Reassurance.webp"},
        {name: "His Spiteful Boon", sotv: false, sots: true, image: "itemsEquipmentElite/His_Spiteful_Boon.webp"},
        {name: "Ifrit's Distinction", sotv: false, sots: false, image: "itemsEquipmentElite/Ifrit's_Distinction.webp"},
        {name: "N'kuhana's Retort", sotv: false, sots: false, image: "itemsEquipmentElite/N'kuhana's_Retort.webp"},
        {name: "Shared Design", sotv: false, sots: false, image: "itemsEquipmentElite/Shared_Design.webp"},
        {name: "Silence Between Two Strikes", sotv: false, sots: false, image: "itemsEquipmentElite/Silence_Between_Two_Strikes.webp"},
        {name: "Spectral Circlet", sotv: false, sots: false, image: "itemsEquipmentElite/Spectral_Circlet.webp"}
    ]
};

const categoryColors = {
    survivors: "#8fa5d0",
    white: "#cccccc",
    green: "#00ff00",
    red: "#ff0000",
    yellow: "#ffff00",
    lunar: "#00ffff",
    voidWhite: "#ff99ff",
    voidGreen: "#ff99ff",
    voidRed: "#ff99ff",
    voidYellow: "#ff99ff",
    equipment: "#ff9900",
    equipmentLunar: "#00ffff",
    equipmentElite: "#ff9900"
};

const historyList = document.getElementById("historyList");
const maxHistory = 10;

function getRandomItem() {
    const category = document.getElementById('categorySelect').value;
    const sotvActive = document.getElementById('sotvFilter').classList.contains('selected');
    const sotsActive = document.getElementById('sotsFilter').classList.contains('selected');
    const result = document.getElementById('result')
    const image = document.getElementById('itemImage')

    let categoryItems = items[category];

    if (!categoryItems) {
        result.innerText = "Category not found!";
        return;
    }

    const filtered = categoryItems.filter(item => {
        if (!sotvActive && item.sotv) return false;
        return !(!sotsActive && item.sots);

    });

    if (filtered.length === 0) {
        result.innerText = "No items match the active filters!";
        image.style.display = "none";
        return;
    }

    const random = filtered[Math.floor(Math.random() * filtered.length)];
    result.innerText = random.name;

    if (random.image) {
        image.src = random.image;
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }

    const color = categoryColors[category] || "#ffcc00";
    result.style.color = color;
    result.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;

    addToHistory(random.name);
}

function addToHistory(itemName) {
    const category = document.getElementById('categorySelect').value;

    const li = document.createElement("li");
    li.textContent = itemName;

    li.style.color = categoryColors[category] || "#ffcc00";

    historyList.insertBefore(li, historyList.firstChild);

    if (historyList.children.length > maxHistory) {
        historyList.removeChild(historyList.lastChild);
    }
}

document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
    });
});
