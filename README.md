# Risk of Rain 2 Randomizer 🎲

A fun and customizable Risk of Rain 2 (RoR2) Randomizer web app that lets you randomly generate Survivors, Items, Equipment, and more – with filter support for Survivors of the Void (SotV) and Seekers of the Storm (SotS) content.

## Features

-Random Survivor & Item Generator

-Category Filters (Survivors, White, Green, Red, Lunar, all Void tiers, Equipment and Elite Equipment)

-SotV & SotS Toggles for DLC-specific content

-Item & Survivor Images Displayed on roll

### HTML / CSS / JavaScript (Vanilla, no frameworks)

## How to Use

1. Open the site. https://bemounir.github.io/ROR2Randomizer/

2. Select desired filters (SotV / SotS, categories).

2. Click Randomize.

## Adding New Items

To add a new item:

{ name: "New Item", sotv: false, sots: false, image: "itemsGreen/New_Item.webp" }

Add this to the item dictionary, set the correct sotv and sots values depending on whether it appears in Survivors of the Void or Seekers of the Storm, and include the appropriate image path.
