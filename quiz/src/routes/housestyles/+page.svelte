<script>
// @ts-nocheck

import '../../global.css';
import { Center, Anchor, Container } from '@svelteuidev/core';
import house1 from "$lib/assets/images/house/house_1.png";
import house2 from "$lib/assets/images/house/house_2.png";
import house3 from "$lib/assets/images/house/house_3.png";
import house4 from "$lib/assets/images/house/house_4.png";
import BottomNavigation from '$lib/components/BottomNavigation.svelte';

let houseStyles = [
    {
        id: 1,
        name: 'кубизм',
        image: house1
    }, 
    {
        id: 2,
        name: 'шале',
        image: house2
    },
    {
        id: 3,
        name: 'классика',
        image: house3
    },
    {
        id: 4,
        name: 'хай-тек',
        image: house4
    },
]

/**
	 * @type {number | null}
	 */
let activeHouse = null;

/**
	 * @param {number} house
	 */
function handleHouseClick(house) {
    activeHouse = house;
}


</script>

<div class=" h-screen bg-[#DEDEDE] box-border py-10 flex items-center flex-col justify-between">
    <h1 class="text-5xl xl:text-[80px] 2xl:text-[110px] font-bold font-['Mikro-Bold'] lowercase">Стиль дома?</h1>

    <div class="flex flex-col items-center lg:flex-row lg:items-end ">
    <div class="flex justify-center  flex-wrap mb-20 max-w-sm md:max-w-md  lg:mb-0 lg:w-[60%] lg:ml-[50px] lg:ml-[160px] xl:ml-[200px] xl:w-[70%] lg:gap-x-10 lg:max-w-[55%] lg:pl-14 lg:justify-end">
    {#each houseStyles as houseStyle}
        <div class="flex items-center  flex-col">
            <img src={houseStyle.image} alt={houseStyle.image} class="w-[146px] h-[161px] lg:w-[200px] md:w-[200px] md:h-[230px] lg:h-[230px] xl:w-[250px] xl:h-[260px] 2xl:w-[320px] 2xl:h-[350px]"/>
            <a on:click={() => handleHouseClick(houseStyle.id)}  href="#"  class="z-10 flex text-center items-center w-[114px] h-[35px] lg:w-[157px] lg:h-[46px] justify-center border-[0.5px] border-black border-solid font-['Mikro-Regular'] mt-[-30px] lg:mt-[-60px] {activeHouse === houseStyle.id ? 'text-white bg-black' : ''}">{houseStyle.name}</a>
            </div>
    {/each}

    </div>
    <a href="#" on:click={() => handleHouseClick("all")}  class="text-base px-5 py-2 border-[0.5px] border-black border-solid flex justify-center items-center font-['Mikro-Regular'] lg:mb-0 lg:ml-10 lg:w-[204px] lg:h-[48px] {activeHouse === "all" ? 'text-white bg-black' : ''}">выбрать всё</a>
    </div>

    <BottomNavigation />
</div>
    
    


 
  