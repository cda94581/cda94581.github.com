# Behavior Packs
< [Back to "Downloads"](../downloads)

These are all the behavior packs that I've created or used for various purposes.

This page is long, it is recommended to either `Ctrl+F`/`CMD+F` to find the behavior pack of interest, or to find the date when the add-on was released, and use the navigation to quickly navigate to that part.

## 2021/06/10
> **3rd Life Add-on by cda94581** - Version 1.0.0
<YouTubeVideo id="GYFw8RbT58E" />

[View on MCPEDL](https://mcpedl.com/3rd-life-add-on/)

### Introduction
3 lives, if you die you're sent to a custom spectator mode. There's a customizable world border in place. This is not a perfect recreation of the Java SMP, colored names are either too hard or not possible in Bedrock Edition at the current moment in time. Enjoy! This pack does not require prior setup, by applying the pack, you're good to go!

### Documentation
This add-on comes with 2 packs, a behavior pack, and an optional resource pack. The resource pack is just for aesthetic purposes, giving you a spectator head texture. Unfortunately with the current add-on functionality, this cannot change depending on the skin:
![Lack of Custom Skin](https://api.mcpedl.com/storage/submissions/107175/images/3rd-life-addon_2.png)

If you are in multiplayer, then your lives remaining will display below your name. After you die 3 times, you are sent into spectator mode. In your hotbar, you will have 5 items:
- **Milk** clears all effects you have
- **Feather** gives you levitation for 30 seconds
- **Book** explains what I'm explaining right now
- **Leather** Boots gives you Speed 3 for 30 seconds
- **Water Bottle**, when used, teleports you to the nearest player. This only works in multiplayer.

You will be unable to modify the world in any way, shape, or form, while in spectator.

If you have used up all your lives and really want to leave spectator, make sure Cheats are enabled and you have Operator permissions, and then input **/function cda003/reset**. Conversely, if you want to enter spectator, again, make sure Cheats are enabled and you have Operator permissions, then input **/function cda003/spectator**.

There is a world border in place. By default, it is set to 350 blocks away from 0,0, and will warn you with blindness when you're within 20 blocks of that. Changing this is fairly simple and straightforward:

If you have a world already created with the pack
1. Navigate to your **com.mojang** folder. If you are unsure on how to do that on your device, use this link for information.
2. Navigate to the **minecraftWorlds** folder.
3. Navigate to your specific world folder. To know if it is in fact the right one, open up the **levelname.txt** file inside and see if it matches your world name. Just make sure you name your worlds ;)
4. In your world folder, navigate to **behavior\_packs/3rdLifeAdd/animation\_controllers/**. Open the **cda003.json** file inside.
	- If you are unable to open the file, rename it to a **.txt** file extension while editing, and rename it back to a **.json** file extension afterwards
5. Find the line that says: **"transitions": [{ "variables": "v.border\_radius = 350; v.warning\_distance = 20; return 1.0;" }]**. You can modify the **v.border\_radius = 350;** to something else like **v.border\_radius = 500;**. You can do the same with **v.warning\_distance = 20;**. **Do NOT remove the semicolon!**
6. There you go!

If you are creating a new world, create the world first & and apply the pack, then logout and do the steps mentioned above!
Alternatively, you can modify the default border when on world creation, by skipping step 2 & 3. There's a **behavior\_packs** folder in the **com.mojang** folder as well so step 4 is do-able!

### Installation
::: details To Download
1. Download the pack at the given link
2. Import it
	- If you are unable to import it with a tap/double click, rename the file from a **.mcaddon** file extension to a **.zip** file extension. Afterwards, **unzip** the folder and move the **behavior pack** to the **behavior\_packs** folder and the **resource pack** to the **resource\_packs** folder of the **com.mojang** folder
3. Apply it to your worlds
4. Enjoy!
:::

::: details LICENSE
This add-on is provided to you under the [MIT License](https://opensource.org/licenses/MIT), which is a permissive license, allowing you to do most things. It's completely free and open source, for you to build upon or [collaborate](https://github.com/cda94581/Community_Collabs/tree/Add-ons/cda003) as you desire!

If you have any feedback, suggestions, or issues, feel free to [contact me](../about#links)!
:::

### Downloads
- [Download BP on Mediafire (avoid Download Here ads)](https://www.mediafire.com/file/0gllloud6n1i455/3rdLifeV1.0.0BP.mcpack/file)
- [Download RP on Mediafire (avoid Download Here ads)](https://www.mediafire.com/file/kjz4en47qxos9f7/3rdLifeV1.0.0RP.mcpack/file)
- [Bugs, Feedback, Suggestions, Contributions](https://github.com/cda94581/Community_Collabs/tree/Add-ons/cda003)

## 2021/06/01
> **Open Source Chunk Loaders by cda94581** - Updated 2021/09/05 - Version 1.0.2
<YouTubeVideo id="LJBd6VS20jI" />

[View on MCPEDL](https://mcpedl.com/open-source-chunk-loaders/)

### Introduction
Open Source Chunk Loaders is a free addon that adds chunk loaders to Minecraft Bedrock Edition. These can be used for a variety of purposes, like loading farms that don't require a player to be nearby to work, like crop farms. Unlike the existing /tickingarea command, Open Source Chunk Loaders use an entity with a minecraft:tick\_world component to keep chunks loaded. Within reason, unlimited chunk loaders can be added, from a 2 chunk radius, to a 6 chunk radius. This will NOT work as a player, farms that require a player nearby like Iron Golem farms or spawner-based farms, will not work.

### Documentation
To get the chunk loader, you will need a **Nether Star** and a **Lodestone**. Craft the two together, it doesn't matter how you position them. In return, you will get a **Chunk Loader** block.
![Crafting](https://api.mcpedl.com/storage/submissions/105362/images/open-source-chunk-loaders_2.png)

You can also obtain this by inputting **/give @s cda001:chunk\_loader\_block**. This block will cycle through many different states of chunk loading, anywhere from 2-6 chunks.

Place this block down. It is not currently loading any chunks. To do so, step on top of the block. It will become an **entity**.
![0 Chunks](https://api.mcpedl.com/storage/submissions/105362/images/open-source-chunk-loaders_3.png)

Right now, it is still not loading chunks. To start loading chunks, **interact** with this block. This varies based on device, it is basically what you would do to fish. As you continue to interact, you will cycle through all the different chunk loading radii:
![2 Chunks](https://api.mcpedl.com/storage/submissions/105362/images/open-source-chunk-loaders_4.png)
![3 Chunks](https://api.mcpedl.com/storage/submissions/105362/images/open-source-chunk-loaders_5.png)
![4 Chunks](https://api.mcpedl.com/storage/submissions/105362/images/open-source-chunk-loaders_6.png)
![5 Chunks](https://api.mcpedl.com/storage/submissions/105362/images/open-source-chunk-loaders_7.png)
![6 Chunks](https://api.mcpedl.com/storage/submissions/105362/images/open-source-chunk-loaders_8.png)

**Tiny Technical Bits**

The textures are designed so as to visualize the area loaded. Everything in black is not loaded. Everything inside of the green (including the green) is loaded. The blue represents the chunk in which this chunk loader is in.

There are a couple of helpful resource packs that may help with chunks, those being [MaddHatter](https://youtu.be/eTcxPQy1a90)'s, [FoxyNoTail](https://youtu.be/i4yWfY2hnns)'s, and [WinEpicFin](https://mcpedl.com/customizable-render-dragon-chunk-borders/)'s.

As stated above, this will NOT work for farms that require an active player, like iron farms or spawner-based farms.

This pack is [open source](https://github.com/cda94581/Community_Collabs/tree/Add-ons/cda001), meaning anyone may contribute and/or remix and build upon this add-on.

**Warning**: Do NOT add too many of these, it will lag your game.

Finally, enjoy! Let me know if you have any issues as well!

### Installation
::: details To Download
1. Download the pack at the given link
2. Import it
	- If you are unable to import it with a tap/double click, rename the file from a **.mcaddon** file extension to a **.zip** file extension. Afterwards, **unzip** the folder and move the **behavior pack** to the **behavior\_packs** folder and the **resource pack** to the **resource\_packs** folder of the **com.mojang** folder
3. Apply it to your worlds
4. Enjoy!
:::

::: details LICENSE
This add-on is provided to you under the [MIT License](https://opensource.org/licenses/MIT), which is a permissive license, allowing you to do most things. It's completely free and open source, for you to build upon or [collaborate](https://github.com/cda94581/Community_Collabs/tree/Add-ons/cda001) as you desire!

If you have any feedback, suggestions, or issues, feel free to [contact me](../about#links)!
:::

### Downloads
- [Download on Mediafire (avoid Download Here ads)](https://www.mediafire.com/file/60opkkq5spby4kp/openSourceChunkLoadersV1.0.2.mcaddon/file)
- [Bugs, Feedback, Suggestions, Contributions](https://github.com/cda94581/Community_Collabs/tree/Add-ons/cda001)

### Changelogs
::: details Version 1.0.2
Updated version number to match with MCPEDL (assuming I remember file verification)
Fixed an issue preventing chunk loaders from being summoned when stepping on the block, in the nether/end ([#82](https://github.com/cda94581/Community_Collabs/issues/82))
:::

## 2021/03/16
> **Cda's Morph Add-on by cda94581** - Updated 2021/08/15 - Version 0.0.7
<YouTubeVideo id="hrUO6cjRXj0" />

### Introduction
**This Add-on is in ALPHA, and there will be bugs**

Cda’s Morph Add-on brings the popular Java Edition Morph Mod onto Bedrock Edition! This currently supports all the hostile mobs as stated by Minecraft Gamepedia. You are able to morph into mobs and take their appearance, abilities, and more using items that you can either craft or get by killing a mob.

### Documentation
Please note that I am fully, 100% aware of many issues. I am working on fixing them. For a question like "It doesn't work", (because it works) check the troubleshooting section. If you have issues with that, then [contact me](../about#links). For something that you think is a bug, report it on [GitHub](https://github.com/cda94581/Community_Collabs/issues?q=is%3Aopen+is%3Aissue+label%3A%22%E2%9A%A0+Bug%22+label%3A%22%F0%9F%A7%9F%E2%80%8D%E2%99%82%EF%B8%8F+Cda%27s+Morph+Add-on%22) if it hasn't already been reported.

This add-on allows you to **morph** into any mob. With this add-on you have at your disposal 71 different mobs **Morph** items that you may use to morph into the mobs, as well as an item to morph back into your regular **Player**.
![Morph Items](WIP)

Please note that from version 0.0.7 and onwards, using the morph items is different. Previously, you would just **USE** the item, whether that be right-click or similar. <span style="background-color: #FDFD77">**Now**, you must **SNEAK & JUMP**</span> while holding the item.

You also have 1 **WIP** mob, the Ender Dragon.
![WIP Morph Item](WIP)

Please note, many packs will **<span style="background-color: #FDFD77;">not</span>** work with this, as it modifies the **<span style="background-color: #FDFD77;">Vanilla Player Files</span>**.

**To Obtain**:

Some items may currently be unobtainable, this will be worked on in the future. You can either obtain the items by **Crafting** or by **Killing** the proper mob. Recipes are provided below:

- *Creeper* - 1 Gunpowder
- *Bee* - 1 Honeycomb
- *Drowned* - 1 Rotten Flesh
- *Endermite* - 1 Ender Pearl
- *Evoker* - 1 Emerald
- *Ghast* - 1 Ghast Tear
- *Hoglin* - 1 Crimson Fungus
- *Husk* - 1 Rotten Flesh
- *Magma Cube* - 1 Magma Cream
- *Phantom* - 1 Phantom Membrane
- *Piglin Brute* - 1 Gold Ingot
- *Pillager* - 1 Emerald
- *Player* - 1 Dirt
- *Ravager* - 1 Saddle
- *Shulker* - 1 Shulker Shell
- *Skeleton* - 1 Bone
- *Slime* - 1 Slimeball
- *Stray* - 1 Bone
- *Vex* - 1 Emerald
- *Vindicator* - 1 Emerald
- *Witch* - 1 Stick
- *Wither Skeleton* - 1 Coal
- *Wolf* - 1 Bone
- *Zoglin* - 1 Crimson Fungus
- *Zombie* - 1 Rotten Flesh
- *Zombie Villager* - 1 Rotten Flesh

You can also toggle if you want to only be able to obtain by **crafting**, by **killing**, by **both**, or have **no way** to obtain. **You MUST select one of these, or the pack will not work**. To do so, go into your world behavior packs. Tap on it, then tap the **gear** icon. Then, drag the slider to the appropriate one you would like. Options:
- **Left** - No Way to Obtain in Survival
- **Left Center** - Only Recipes
- **Right Center** - Only Loot Tables
- **Right** - Recipes & Loot Tables

**To obtain the WIP Mob**:

Run **"/function cda002/"**, followed by one of the **WIP** mobs, replacing spaces with **Underscores** \_ and **converting to lowercase**. For example, to access the **Ender Dragon**, run:

1. /function cda002/ender_dragon

Please note that there is a reason that the Ender Dragon is marked as WIP, and that I am working on bringing it out.

[https://github.com/cda94581/Community_Collabs/issues?q=is%3Aopen+is%3Aissue+label%3A%22%E2%9A%A0+Bug%22+label%3A%22%F0%9F%A7%9F%E2%80%8D%E2%99%82%EF%B8%8F+Cda%27s+Morph+Add-on%22](https://github.com/cda94581/Community_Collabs/issues?q=is%3Aopen+is%3Aissue+label%3A%22%E2%9A%A0+Bug%22+label%3A%22%F0%9F%A7%9F%E2%80%8D%E2%99%82%EF%B8%8F+Cda%27s+Morph+Add-on%22)

**Known Issues**:
- #4 Lack of movement animations
- #6 Camera won't adjust based on entity size
- #7 Held items may render in the wrong spot
- #9 Magma Cube/Slime can only be baby size
- #10 Ravagers do not break blocks
- #11 Weird crouching animation
- #13 Piglin brutes don't drop morph

**Reasons some mobs are WIP**:
- #81 Ender Dragon renders incorrectly

**Troubleshooting**

If your pack won't work, the information below may help. Additional information can be found in the Pinned Comments on MCPEDL or YouTube.
- Make sure that when you apply the Behavior Pack, you choose a subpack.
	- Note that this *should* automatically happen if you apply the Behavior Pack first, however always double check.
- Make sure both the Resource Pack and Behavior Pack is applied.
- This pack might not be compatible with other packs.
- Cheats might need to be enabled (testing required).
- Before 0.0.6, make sure you're on version 1.16.201+.
- As of 0.0.6, make sure you're on version 1.17.0+.
- As of 0.0.7, make sure you're on version 1.17.10+
- Before 0.0.3, make sure "Holiday Creator Features" is enabled.
- Contact me! I highly recommend using [these links](../about#links) as I can more easily receive notifications and as such, help more.

### Installation
::: details To Download
1. Download the pack at the given link
2. Import it
	- If you are unable to import it with a tap/double click, rename the file from a **.mcaddon** file extension to a **.zip** file extension. Afterwards, **unzip** the folder and move the **behavior pack** to the **behavior\_packs** folder and the **resource pack** to the **resource\_packs** folder of the **com.mojang** folder
3. Apply it to your worlds
4. Enjoy!
:::

::: details LICENSE
This add-on is provided to you under the [CC-BY-SA-4.0 License](https://creativecommons.org/licenses/by-sa/4.0/), which allows modification and redistribution as long as proper credit is provided and you use the same license.

If you have any feedback, suggestions, or issues, feel free to [contact me](../about#links)!
:::

### Downloads
- [Download on Mediafire (avoid Download Here ads)](https://www.mediafire.com/file/uvpk0ghl187ykr9/cdasMorphV0.0.7.mcaddon/file)
- [Bugs, Feedback, Suggestions, Contributions](https://github.com/cda94581/Community_Collabs/tree/Add-ons/cda002)

::: details LEGACY LINKS
These are a collection of the latest release, when you're on the latest version.
- [Download Last version for 1.17.0 (Alpha 0.0.6)](https://www.mediafire.com/file/c2msjyqfl7019xs/cdasMorphV0.0.6.mcaddon/file)
- [Download Last version for 1.16 (Alpha 0.0.5)](https://www.mediafire.com/file/7lp1zj1nebsax3s/cdasMorphV0.0.5.mcaddon/file)
:::

### Changelogs
:::: details 0.0.1 - 0.0.7
::: details Version 0.0.7
- Updated Properly for 1.17.10
- Reformatted queries and variables to save a few bytes
- Minimized final product to save space (If you want expanded version, contact me :)
- Silverfish now renders properly ([#20](https://github.com/cda94581/Community_Collabs/issues/20))
- Chicken now renders properly ([#80](https://github.com/cda94581/Community_Collabs/issues/80))
- Silverfish has been removed from hidden WIP mobs
- Chicken has been removed from hidden WIP mobs
- Morph activating has changed from USING the item to SNEAK & JUMP while holding the item
- Morph should now work in Multiplayer ([#84](https://github.com/cda94581/Community_Collabs/issues/84))
:::

::: details Version 0.0.6
- Updated Properly for 1.17.0
- Added Axolotl
- Added Glow Squid
- Added Goat
:::

::: details Version 0.0.5
- Mobs now have movement animation ([#4](https://github.com/cda94581/Community_Collabs/issues/4))
- The proper mobs now hold out arms ([#8](https://github.com/cda94581/Community_Collabs/issues/8))
- Blaze now renders properly ([#16](https://github.com/cda94581/Community_Collabs/issues/16))
- Elder Guardian now renders spikes correctly ([#17](https://github.com/cda94581/Community_Collabs/issues/17))
- Guardian now renders spikes correctly ([#19](https://github.com/cda94581/Community_Collabs/issues/19))
- Mobs are no longer super fast in water when they aren't supposed to be ([#32](https://github.com/cda94581/Community_Collabs/issues/32))
- You can now toggle between ways to obtain in survival (Recipes, Loot Tables, Both, No way), by clicking on the pack gear icon ([#51](https://github.com/cda94581/Community_Collabs/issues/51))
- Blaze has been removed from hidden WIP mobs
- Elder Guardian has been removed from hidden WIP mobs
- Guardian has been removed from hidden WIP mobs
- Made some small tweaks to Piglin Brute Morph item texture

NEW MOBS! (Note these are still being developed and more features will be added) Crafting recipes for all new mobs except for Bee and Wolf are still in development
- Added Wolf ([#33](https://github.com/cda94581/Community_Collabs/issues/33))
- Added Wither ([#34](https://github.com/cda94581/Community_Collabs/issues/34))
- Added Fox ([#35](https://github.com/cda94581/Community_Collabs/issues/35))
- Added Horse ([#36](https://github.com/cda94581/Community_Collabs/issues/36))
- Added Cat ([#37](https://github.com/cda94581/Community_Collabs/issues/37))
- Added Enderman ([#38](https://github.com/cda94581/Community_Collabs/issues/38))
- Added Villager ([#39](https://github.com/cda94581/Community_Collabs/issues/39))
- Added Piglin ([#45](https://github.com/cda94581/Community_Collabs/issues/45))
- Added Ender Dragon ([#46](https://github.com/cda94581/Community_Collabs/issues/46)) (Locked behind WIP due to rendering issues)
- Added Rabbit ([#47](https://github.com/cda94581/Community_Collabs/issues/47))
- Added Pig ([#48](https://github.com/cda94581/Community_Collabs/issues/48))
- Added Bee ([#49](https://github.com/cda94581/Community_Collabs/issues/49))
- Added Cow ([#50](https://github.com/cda94581/Community_Collabs/issues/50))
- Added Bat ([#52](https://github.com/cda94581/Community_Collabs/issues/52))
- Added Chicken ([#53](https://github.com/cda94581/Community_Collabs/issues/53)) (Locked behind WIP due to rendering issues)
- Added Cod ([#54](https://github.com/cda94581/Community_Collabs/issues/54))
- Added Donkey ([#55](https://github.com/cda94581/Community_Collabs/issues/55))
- Added Mooshroom ([#56](https://github.com/cda94581/Community_Collabs/issues/56))
- Added Mule ([#57](https://github.com/cda94581/Community_Collabs/issues/57))
- Added Ocelot ([#58](https://github.com/cda94581/Community_Collabs/issues/58))
- Added Parrot ([#59](https://github.com/cda94581/Community_Collabs/issues/59))
- Added Pufferfish ([#60](https://github.com/cda94581/Community_Collabs/issues/60))
- Added Salmon ([#61](https://github.com/cda94581/Community_Collabs/issues/61))
- Added Sheep ([#62](https://github.com/cda94581/Community_Collabs/issues/62))
- Added Skeleton Horse ([#63](https://github.com/cda94581/Community_Collabs/issues/63))
- Added Snow Golem ([#64](https://github.com/cda94581/Community_Collabs/issues/64))
- Added Squid ([#65](https://github.com/cda94581/Community_Collabs/issues/65))
- Added Strider ([#66](https://github.com/cda94581/Community_Collabs/issues/66))
- Added Tropical Fish ([#67](https://github.com/cda94581/Community_Collabs/issues/67))
- Added Turtle ([#68](https://github.com/cda94581/Community_Collabs/issues/68))
- Added Wandering Trader ([#69](https://github.com/cda94581/Community_Collabs/issues/69))
- Added Cave Spider ([#70](https://github.com/cda94581/Community_Collabs/issues/70))
- Added Dolphin ([#71](https://github.com/cda94581/Community_Collabs/issues/71))
- Added Iron Golem ([#72](https://github.com/cda94581/Community_Collabs/issues/72))
- Added Llama ([#73](https://github.com/cda94581/Community_Collabs/issues/73))
- Added Panda ([#74](https://github.com/cda94581/Community_Collabs/issues/74))
- Added Polar Bear ([#75](https://github.com/cda94581/Community_Collabs/issues/75))
- Added Spider ([#76](https://github.com/cda94581/Community_Collabs/issues/76))
- Added Zombified Piglin ([#77](https://github.com/cda94581/Community_Collabs/issues/77))
- Added Agent ([#78](https://github.com/cda94581/Community_Collabs/issues/78))
- Added NPC ([#79](https://github.com/cda94581/Community_Collabs/issues/79))
:::

::: details Version 0.0.4
- Blaze renders ([#25](https://github.com/cda94581/Community_Collabs/issues/25))
- Mobs that should burn in fire will burn ([#5](https://github.com/cda94581/Community_Collabs/issues/5))
- Ghast visual size is now correct ([#18](https://github.com/cda94581/Community_Collabs/issues/18))
- Vex visual size is now correct ([#23](https://github.com/cda94581/Community_Collabs/issues/23))
- Zombie Villager renders properly with outer layer ([#24](https://github.com/cda94581/Community_Collabs/issues/24))
- Progress: Phantoms are more controllable ([#27](https://github.com/cda94581/Community_Collabs/issues/27)) as well as Ghasts
- Vex no longer breaks worlds ([#28](https://github.com/cda94581/Community_Collabs/issues/28))
- Fixed some scaling due to the player being scaled smaller
- Ghast has been removed from hidden WIP mobs
- Vex has been removed from hidden WIP mobs
- Zombie Villager has been removed from hidden WIP mobs
- Updated properly for 1.16.220
:::

::: details Version 0.0.3
- Added el_GR (Greek) translation (Thanks Google)
- Slime now renders mostly properly ([#21](https://github.com/cda94581/Community_Collabs/issues/21))
- Stray now renders properly ([#22](https://github.com/cda94581/Community_Collabs/issues/22))
- Slime has been removed from hidden WIP mobs
- Stray has been removed from hidden WIP mobs
- Skeleton has been removed from hidden WIP mobs...why was it there in the first place lol?
- Added changelog to behavior/resource pack
- You no longer require "Holiday Creator Features" to use
- Added functions for easier morphing
:::

::: details Version 0.0.2
- Updated README to show known issues numbers
- Husks now drop morph ([#12](https://github.com/cda94581/Community_Collabs/issues/12))
- Vexes now drop morph ([#14](https://github.com/cda94581/Community_Collabs/issues/14))
- Zombie villagers now drop morph ([#15](https://github.com/cda94581/Community_Collabs/issues/15))
- TEMPORARY FIX: Phantoms won't float forever ([#27](https://github.com/cda94581/Community_Collabs/issues/27))
- Supports 1.16.201 for MCPEDL reasons
:::

::: details Version 0.0.1
- Added all hostile mobs as listed by MC Gamepedia
- Added loot tables
- Added recipes
:::
::::

## 2020/11/10
> **Cda's Copper Add-on by cda94581** - Updated 2020/12/11 - Version 1.0.1
<YouTubeVideo id="P1f3xkaiI_o" />

### Introduction
Copper Add-on by cda94581. All Copper blocks are added, aside from the Lightning Rod and Spyglass. Read the README.TXT file for more information. Download [here](https://github.com/cda94581/website-rewrite/blob/downloads/bps/cdasCopperV1.0.1.mcaddon?raw=true)

### Changelogs
:::: details 1.0.0 - 1.0.1
::: details Version 1.0.1
- Updated with new 1.16.200 features to be a bit more optimized
- Updated manifest descriptions with a bit more branding
:::

::: details Version 1.0.0
- Added Cut Copper Stairs and weathered variants
	- Stair textures are currently off a bit
- Added Cut Copper Slabs and weathered variants
- Removed unnecessary blocks.json definition
- Distributed as Cda's Copper v1.0.0
:::
::::

:::: details 0.0.1 - 0.0.3
::: details Version 0.0.3
- Updated changelog format to include date, added credits
- Copper Ingot texture will now load
:::

::: details Version 0.0.2
- Updated to coincide with the Java Edition 20w46a snapshot
- Changed the crafting recipe of the Copper Block to coincide with the Java Edition 20w46a snapshot
- Changed the textures of Cut Copper, and the Copper Ingot Item to coincide with the Java Edition 20w46a snapshot
	- Ingot one is irrelevant if it cannot load
- Added support for people using the English (UK) language
- Distributed as Cda's Copper v0.0.2
:::

::: details Version 0.0.1
- Added Copper Ore
- Added Copper Ore Generation
- Added Copper Ingot
- Added Copper Block
- Added Copper Block Weathered Varients
- Added Waxed Copper Block and Varients
- Added Cut Copper
- Added Cut Copper Weathered Varients
- Added Waxed Cut Copper and Varients
- Added recipes
- Added extra files for the purpose of future updates
- Distributed as Cda's Copper v0.0.1
:::
::::