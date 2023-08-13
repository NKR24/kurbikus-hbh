<script>
import '../../global.css';
import { Center, Anchor } from '@svelteuidev/core';
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

</script>

<div class="flex items-center bg-[#DEDEDE] flex-col">
    <h1 class="text-5xl lg:text-[110px]	mt-12 mb-12 font-bold font-['Mikro-Bold'] lowercase">Стиль дома?</h1>

    <div class="flex flex-col items-center lg:flex-row lg:items-end ">
    <div class="flex justify-center  flex-wrap mb-20 max-w-sm  md:mb-0 lg:gap-x-20 lg:max-w-3xl lg:pl-14 lg:justify-start">
    {#each houseStyles as houseStyle}
        <div class="flex items-center  flex-col">
            <img src={houseStyle.image} alt={houseStyle.image} class="w-[146px] h-[161px] lg:w-[315px] lg:h-[352px]"/>
            <Anchor href="/" color="black" underline={false} class="flex text-center items-center w-[114px] h-[35px] lg:w-[157px] lg:h-[46px] justify-center bg-inherit border-[0.5px] border-black border-solid font-['Mikro-Regular'] mt-[-30px] lg:mt-[-60px]">{houseStyle.name}</Anchor>
            </div>
    {/each}

    </div>
    <Anchor href="/" color="white" underline={false} class="text-base px-5 py-2 bg-black lg:text-black lg:bg-inherit border-[0.5px] border-black border-solid flex justify-center items-center mb-16 md:mb-0 lg:ml-32 lg:w-[204px] lg:h-[48px]">выбрать всё</Anchor>
    </div>

    <BottomNavigation />
</div>
    
    


  
  