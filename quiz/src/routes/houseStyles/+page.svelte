<script>
import '../../global.css';
import house1 from "$lib/assets/images/house/house_1.png";
import house2 from "$lib/assets/images/house/house_2.png";
import house3 from "$lib/assets/images/house/house_3.png";
import house4 from "$lib/assets/images/house/house_4.png";

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

<div class="flex items-center h-screen bg-[#DEDEDE] flex-col">
    <h1 class="text-5xl	mt-12 mb-12 font-bold font-['Mikro-Bold'] lowercase">Стиль дома?</h1>

    <div class="flex justify-center flex-wrap mb-20">
    {#each houseStyles as houseStyle}
        <div class="flex items-center flex-col">
            <img src={houseStyle.image} alt={houseStyle.image} class=""/>
            <a href="#" class="flex items-center w-[114px] h-[35px] justify-center bg-inherit  border-[0.5px] border-black border-solid font-['Mikro-Regular']">{houseStyle.name}</a>
            </div>
    {/each}
    </div>
    <a href="#" class="text-sm bg-black text-white py-2 px-5">выбрать всё</a>
</div>
    
    


  
  