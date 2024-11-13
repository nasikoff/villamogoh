 
import { Bath2Icon, BathIcon, BroomIcon, CheckIcon, ClimatIcon, CofeIcon, ConditionerIcon, CottageIcon, FridgeIcon, GameIcon, GuestsIcon, KitchenIcon, MicriIcon, ParkingIcon, SquareIcon, TeaIcon, TvIcon, WashIcon, WhatsappIcon, WifiIcon, WoodIcon } from "@/components/icons";
import { Chip } from "@nextui-org/chip";
 
 
export const cottage = [
  {
    name: "Сottege One",
    price: "₽12000",
    address: "Дагестан, с. Могох",
    day:" / ночь", 
    href:"/all-cottage/cottage-one",
    title: "Сottege One",
    square: "100 м²",
    guests: "8 гостей",
    conditioner:<Chip size="lg" variant="light" startContent={<ConditionerIcon height={20}/>}><span className="pl-1">4</span></Chip>,
    description: "Сottege One в нашем комплексе предлагает вам непревзойденный комфорт и современные удобства. Внутри вас ждет стильный и функциональный интерьер, где каждая деталь продумана для вашего удобства. Современная мебель и бытовая техника обеспечат вам максимальный комфорт, а панорамные окна позволят наслаждаться потрясающими видами на величественные горы, создавая атмосферу умиротворения и гармонии", 
    descriptionlite: "Сottege One - стильное жилье с панорамными окнами и современной мебелью, где каждая деталь продумана для вашего комфорта. Наслаждайтесь видами на горы и чувствуйте гармонию и умиротворение.",
    img: "/img/cottageone/1.webp",
  },
  {
    name: "Сottege Two",
    price: "₽12000",
    title: "Сottege Two",
    href:"/all-cottage/cottage-two",
    day:" / ночь",
    square: "100 м²",
    guests: "6 гостей",
    conditioner:<Chip size="lg" variant="light" startContent={<ConditionerIcon/>}><span className="pl-1">4</span></Chip>,
    description: "Сottege Two в нашем комплексе — это воплощение современного комфорта и роскоши. Внутри вас ждет элегантное и функциональное пространство, где каждая деталь продумана для вашего удобства. Современная мебель и бытовая техника высочайшего качества обеспечат вам максимальный комфорт, а панорамные окна откроют перед вами захватывающие виды на величественные горы, создавая атмосферу умиротворения и гармонии.", 
    descriptionlite: "Сottage Two представляет собой оазис современного комфорта, где вас ждет элегантное пространство с панорамными видами на горы. Высококачественная мебель и бытовая техника обеспечат максимальный уровень удобства и роскошь." ,
    img: "/img/cottageone/2.webp",
  },
  { 
    name: "Russian Bathhouse",
    price: "₽900",
    day:" / час",
    href:"/all-cottage/russian-bathhouse",
    square: "70 м²",
    guests: "6 гостей",
    conditioner: "",
    title: "Russian Bathhouse",
    description: "Russian Bathhouse в нашем комплексе предлагает уютную и атмосферную парную с традиционными деревянными элементами. Внутри есть все необходимое для комфортного отдыха: войлочные шапки, веники, настои трав и эфирные масла.Russian Bathhouse — это не только гигиеническая процедура, но и оздоровительный ритуал, который помогает очистить поры, активизировать кровообращение и подарить ощущение легкости.",
    descriptionlite: "Насладитесь расслабляющими процедурами в русской бане с вениками, войлочными шапками и ароматными настоями. Почувствуйте легкость и свежесть после посещения!",
    img: "/img/6.jpeg", 
    
  },
  
   
];

export const about  = [
  {
    description: "База отдыха Villa Mogoh расположена в горном районе и предлагает своим гостям возможность насладиться живописными видами гор, чистым воздухом и уединением от городской суеты. На территории базы есть уютные коттеджи, русская баня. Здесь можно провести время активно, занимаясь прогулками по горной местности, велоспортом или просто отдыхать, наслаждаясь природой. VILLAMOGOH идеальное место для отдыха в горах и погружения в атмосферу природы.",
  },
];

export const numbercard  = [
  {
    title: "Общая площадь базы",
    numbertext: "3000 м²",
    svg: <SquareIcon height={40}/>,
  },
  {
    title: "Довольных гостей",
    numbertext: "200+",
    svg: <GuestsIcon height={40}/>,
  },
  {
    title: "Коттеджей",
    numbertext: "2",
    svg: <CottageIcon height={40}/>,
  },
];

export const PriceOne = [ cottage[0].price ];
export const PriceTwo = [ cottage[1].price ];
export const PriceRB = [ cottage[2].price ];

export const DescriptionOne = [ cottage[0].description ];
export const DescriptionTwo = [ cottage[1].description ];
export const DescriptionRB = [ cottage[2].description ];
export const DescriptionAbout = [ about[0].description ];

export const SquareOne = [ cottage[0].square ];
export const SquareTwo = [ cottage[1].square ];
export const SquareRB = [ cottage[2].square ];

export const GuestsOne = [ cottage[0].guests ];
export const GuestsTwo = [ cottage[1].guests ];
export const GuestsRB = [ cottage[2].guests ];

export const comfortRB  = [
  {
    title: "Парная",
    svg: <BathIcon height={18}/>, 
  },
  {
    title: "Веники",
    svg: <BroomIcon height={18}/>,   
  },
  {
    title: "Деревянный настил",
    svg: <WoodIcon height={18}/>,  
  },
  {
    title: "Предбанник",
    svg: <Bath2Icon height={18}/>,  
  },
  {
    title: "Моечная",
    svg: <WashIcon height={18}/>,   
  },
  {
    title: "Чайная комната",
    svg: <TeaIcon height={18}/>,   
  },
 
];

export const comfort = [
  {
    title: "Парковка",
    svg: <ParkingIcon height={18}/>, 
  },
  {
    title: "TV",
    svg: <TvIcon height={18}/>,   
  },
  {
    title: "Wi-Fi",
    svg: <WifiIcon height={18}/>,  
  },
  {
    title: "Кондиционер",
    svg: <ClimatIcon height={18}/>,   
  },
  {
    title: "Развлечения",
    svg: <GameIcon height={18}/>,   
  },
  /*
  {
    title: "Микроволновка",
    svg: <MicriIcon height={18}/>,     
  },
  */
  {
    title: "Холодильник",
    svg: <FridgeIcon height={18}/>,    
  },
  {
    title: "Кофемашина",
    svg: <CofeIcon height={18}/>,  
  },
  {
    title: "Приборы",
    svg: <KitchenIcon height={18}/>,   
  },
  {
    title: "Удобства",
    svg: <CheckIcon height={18}/>,     
  },
];

export const siteConfig = {
    name: "VillaMogoh - Коттеджи с видом на горы",
    description: "Мы предлагаем аренду коттеджей на любой срок, чтобы вы могли провести незабываемое время в окружении гор. Забронируйте свой отдых уже сегодня и откройте для себя новые горизонты комфорта и природы!",
    navItems: [
      {
        label: "Главная",
        href: "/",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"/></svg>,
      },
      {
        label: "Объекты",
        href: "/all-cottage",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" fill-rule="evenodd" d="M11 14L25 4v40H11z" clip-rule="evenodd"/><path d="m25 13l14 10v21M4 44h40"/></g></svg>,
      },
      {
        label: "О нас",
        href: "/about",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm-32-344a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96"/></svg>,
      },
    ],
  
};


export const list = [
  {
    title: "Захватывающие виды",
    img: "/img/3.webp", 
  },
  {
    title: "Комфорт и уют",
    img: "/img/cottageone/19.webp",  
  },
  {
    title: "Близость к природе",
    img: "/img/12.jpeg",  
  },
  {
    title: "Уединение и спокойствие",
    img: "/img/14.jpeg",  
  },
   
];


export const listtwo = [
  {
    title: "Удобная парковка",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 21V3h7q2.5 0 4.25 1.75T19 9t-1.75 4.25T13 15h-3v6zm4-10h3.2q.825 0 1.413-.587T15.2 9t-.587-1.412T13.2 7H10z"/></svg>,  
  },
  {
    title: "Русская баня",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M273.38 368.37c-.81-9.23-8.86-16.44-18.55-16.44a18.63 18.63 0 0 0-18.2 14.07l-18.2 88.36a35.6 35.6 0 0 0-.93 7.87c0 19.93 16.68 33.77 37.33 33.77s37.34-13.84 37.34-33.77a36.2 36.2 0 0 0-1.29-9.45Zm137.67 39.52a42.7 42.7 0 0 0-5.95-4.36L335.57 355c-6.77-4.24-14-4.13-19.25 1a13.52 13.52 0 0 0-2 17.19l52.5 69a38 38 0 0 0 4 4.69c9.1 10.16 29.28 10.72 40.37 0c10.94-10.96 10.81-30.39-.14-38.99m52.25-71.96h-70.42c-4.55 0-8.88 3.35-8.88 8.15s2.95 7.85 6.92 9.16l66.43 20.55C467 376 480 367.44 480 356.71c0-13.63-7.6-20.78-16.7-20.78m-335.08 8.15c0-4.95-4.55-8.15-9.45-8.15H48.35c-8.87 0-16.35 9.58-16.35 20.31S44.62 376 54.3 373.79l67.43-20.55c4.39-1.31 6.49-4.24 6.49-9.16m48.33 10.97L107 403.41a32.3 32.3 0 0 0-6 4.34a26.33 26.33 0 0 0 0 38.56a29.41 29.41 0 0 0 40.36 0a31 31 0 0 0 4-4.68L197.9 373c3.5-5.57 2.92-12.48-2-17a15 15 0 0 0-19.35-.95m116.91-112.66c10-5.42 19.45-10.54 28.31-16.16c42.46-26.92 62.23-59 62.23-101c0-64.66-56.07-104.4-108.82-109c-6.49-.57-15-.42-19.91 3.88s-5.88 12.56-6.15 19.1c-1.38 33.61-28.38 59-57 85.86c-28 26.3-56.93 53.49-62.71 91c-8.41 54.68 21.74 86.71 40.46 100.93a31.88 31.88 0 0 0 19.3 6.51a32.3 32.3 0 0 0 7.41-.87a31.75 31.75 0 0 0 21.27-16.95c14.91-30.39 45.77-47.12 75.61-63.3"/><path fill="currentColor" d="M139.82 156.57c12.22-15.76 27-29.68 41.37-43.15c19.92-18.72 37.81-35.58 46.5-53.86c-12.24-7.37-27.36-11.36-46.51-11.36c-17.79 0-20.39 5.18-20.39 19.06c0 12.56-6.53 20.54-14.34 30.65C137.8 109.1 128 121.77 128 140.84c0 10.23 1.29 18.77 4.2 26.37q3.5-5.32 7.62-10.64m190.52 83.17c-9.33 5.92-19 11.16-29.25 16.71c-28.91 15.68-56.21 30.48-68.88 56.28a63 63 0 0 1-1.88 3.61a8 8 0 0 0 3.89 11.3c12.31 5.1 25.13 8.27 38.91 8.27a111.42 111.42 0 0 0 78.24-31.37A107.45 107.45 0 0 0 384 226.85a86.6 86.6 0 0 0-1.33-15a8 8 0 0 0-13.8-4c-10.18 11.47-22.93 22-38.53 31.89"/></svg>,  
  },
  {
    title: "Wi-Fi",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4q3.425 0 6.525 1.275T24 9zM4.35 10.5q1.675-1.2 3.625-1.85T12 8t4.025.65t3.625 1.85l1.45-1.45q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05z"/></svg>,  
  },
  {
    title: "Cплит-системы",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M10 16a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L15 17v1.172a1 1 0 0 0 .206.608l.087.099l.414.414a1 1 0 0 1-1.32 1.497l-.094-.083l-.414-.414a3 3 0 0 1-.872-1.923L13 18.172V17a1 1 0 0 1 1-1m-8 0a1 1 0 0 1 .993.883L7 17v.613a2 2 0 0 1-1.218 1.84l-.15.057l-1.316.439a1 1 0 0 1-.74-1.854l.108-.044L5 17.613V17a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 17v.613l1.316.438a1 1 0 0 1-.52 1.928l-.112-.03l-1.316-.44a2 2 0 0 1-1.362-1.736l-.006-.16V17a1 1 0 0 1 1-1m0-13a3 3 0 0 1 2.995 2.824L21 6v6a3 3 0 0 1-2.824 2.995L18 15H6a3 3 0 0 1-2.995-2.824L3 12V6a3 3 0 0 1 2.824-2.995L6 3zm0 8H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1m-1-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></g></svg>,  
  },
  {
    title: "Развлечения",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/></svg>,  
  },
  {
    title: "Современный дизайн",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 1.1.2 2.2.6 3.1c-.4 1.6-.6 3.2-.6 4.9c0 46.4 37.6 84 84 84s84-37.6 84-84c0-1.7-.2-3.3-.6-4.9c.4-1 .6-2 .6-3.1V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40"/></svg>,  
  },
  {
    title: "Мангальные зоны",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.6 5.386h-1.058a7 7 0 0 0 .069-.955H3.36a7 7 0 0 0 .069.955h-.966a.435.435 0 0 0 0 .869h1.151a7.77 7.77 0 0 0 4.1 4.738l-3.458 9.455a.65.65 0 0 0 .388.835a.65.65 0 0 0 .835-.388l.951-2.6h10.68a1.766 1.766 0 1 0 1.653-.628a.64.64 0 0 0-.034-.311l-2.347-6.422a7.75 7.75 0 0 0 3.975-4.676H21.6a.435.435 0 0 0 0-.869Zm-3.121 12.776a1.245 1.245 0 1 1-1.244 1.245a1.244 1.244 0 0 1 1.244-1.245M17.21 16.99H6.906l2.009-5.5a9.7 9.7 0 0 0 3.071.493a9.7 9.7 0 0 0 3.2-.537Z"/></svg>,  
  },
  {
    title: "Уютные коттеджи",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M267.375 14.688c-17.09 6.94-30.576 17.288-38.75 29.593l-14.813-27.593c-9.017 49.344-12.52 95.085 32 109.563c-10.734 36.94-17.187 73.9-20.687 110.813l-20.563-38.344c-2.848-14.713-9.618-30.698-17.343-47l-17.376 74.124c-7.214-22.468-16.496-44.677-28.47-66.47c24.46-43.217 16.134-70.568-31.093-79.28c-.515 3.04-.56 9.344-.56 9.344l-19.876-8.75L87.5 100.53l-9.344-4.655c-5.433 42.254-.12 74.946 46.625 72.094a342 342 0 0 1 10.314 20.28L29.22 156.312c31.263 45.247 64.173 82.76 112.53 47.094c10.985 26.656 18.485 53.944 23.75 81.72l-64.78-40.188c12.872 36.068 28.203 67.286 66.936 52.437c1.237 7.446 2.306 14.926 3.28 22.438h18.876c-2.757-21.95-6.533-43.82-11.906-65.5c8.208-4.095 14.35-8.853 18.75-14.188c3.693 11.197 11.61 19.643 26.438 23.594c-1.097 18.71-1.506 37.414-1.438 56.092h18.688c-.014-4.07-.003-8.12.03-12.187c41.888-6.813 39.48-42.478 32.407-81.188l-31.967 59.625c.765-23.7 2.492-47.326 5.593-70.906c52.515 5.043 61.144-38.783 65.125-87.78l-61.81 65.843c3.47-20.563 8.06-41.09 14-61.564c37.544 4.596 76.884-35.765 75.28-70l-12.438 7.72c-1.053-11.96-6.674-25.51-17.125-40.69c-7.535 5.354-14.003 12.573-19.843 20.44L285.5 31.03l-11.688 14.595c-.32-10.47-2.17-20.77-6.437-30.938zm182.22 99.25c-4.994.008-10.98.86-18.25 2.906c-13.336 3.754-27.52 12.25-22.376 37.625c-24.488 13.127-45.408 31.122-62.25 53.155h-.19c.03.045.067.08.095.125c-.8 1.05-1.593 2.09-2.375 3.156l23.063-76.344c-45.938 31.743-83.94 65.165-45.438 114.75c-9.69 21.296-16.536 44.94-20.313 70.5h38.032c24.53-7.376 29.6-36.436 32.187-68.25l-48.155 51.282c6.766-30.55 18.424-57.235 34.406-79.47c36.727 42.145 77.18 14.898 118.033-19.81l-104.594 3.28c13.094-14.284 28.35-26.198 45.56-35.5c11.388 14.74 28.402 14.172 40.595 7.812c25.338-13.216 17.442-27.84 38.28-45.906c-20.892 5.264-19.352-19.358-46.31-19.313zM152.936 338.5l26.032 154.594h143.593L348.969 338.5z"/></svg>,  
  },
  {
    title: "Гибкие условия",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="m144.938 18.063l8.437 19.187c17.36 39.43 27.86 79.965 32.563 120.313c-50.01 4.028-99.724 4.15-144.688 1.656l-21.188-1.19L33.5 174.438c42.232 51.6 93.612 82.498 148.438 110.907c-12.137 69.664-39.726 134.1-77.282 185.312L92 487.906l21.25-2.437c99.754-11.457 177.9-51.146 236.688-106.064c33.06 23.513 65.993 52.01 98.093 88.97l15.095 17.374l1.28-22.97c3.558-63.803-8.63-128.11-33.655-187.53c37.76-67.647 57.985-143.224 63.563-214.656l2-25.532l-17.97 18.22c-35.647 36.18-86.34 61.284-143.468 78.124c-46.935-47.74-104.638-85.32-170.03-106.812l-19.907-6.532zm82.75 65.312c10.37.018 23.587 4.884 39.312 14.47a424 424 0 0 1 46.813 39.31c-35.065 8.896-72.027 14.882-109.188 18.626a443 443 0 0 0-3.938-26.624c-.003-.02.004-.042 0-.062c-.856-30.68 8.666-45.75 27-45.72zm183.062 46.688c30.66-.583 46.988 17.807 38.875 56.343c-7.78 22.997-17.28 45.628-28.594 67.47a461.8 461.8 0 0 0-71.436-106.75c12.818-4.06 25.32-8.585 37.437-13.564c8.605-2.196 16.553-3.363 23.72-3.5zm-81.313 22.968c33.327 35.83 60.508 77.187 80.282 121.47c-9.032 15.405-19.007 30.317-30 44.563c-7.257 9.4-15.006 18.48-23.158 27.25c-21.106-6.102-43.19-14.988-60.812-23c-.074-.034-.144-.06-.22-.094c-19.852-11.155-39.46-21.245-58.624-30.908c-11.675-5.886-22.84-11.594-34.125-17.343c4.355-30.108 5.87-61.04 4.126-92.283c25.76-7.15 54.416-13.28 78.313-19.25c14.972-2.99 29.75-6.43 44.217-10.406zm-39.843 32.657q-1.27-.004-2.5.063c-6.556.363-12.224 2.22-16.813 5.125c-9.177 5.81-15.155 16.127-15.155 32.063c0 31.87 28.156 70.8 61 82.812c16.422 6.007 29.822 4.435 39-1.375s15.156-16.127 15.156-32.063c0-31.87-28.124-70.767-60.967-82.78c-7.185-2.63-13.79-3.828-19.72-3.845zm-101.22 2.532c1.17 26.25-.064 52.25-3.374 77.686c-8.285-4.346-16.454-8.732-24.47-13.25c-45.842-30.138-18.07-49.58 27.845-64.437zm11.095 106.03c9.662 4.89 19.185 9.8 29 14.75c34.664 17.48 70.195 36.024 105.686 59.625a374 374 0 0 1-20.937 17.78c-66.568 32.47-115.528 2.77-118.25-70.78a483 483 0 0 0 4.5-21.375zm219.124 1.53a429 429 0 0 1 10.344 30.283c3.064 27.392-20.972 31.225-51.75 25.312a394 394 0 0 0 17.312-20.875c8.65-11.207 16.628-22.84 24.094-34.72"/></svg>,  
  },
   
];

export const contacts = [
  {
    title: "+7 988 042 00 00",
    href:" tel:+79880420000",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"/></svg>,
  },
  {
    title: "Написать на WhatsApp",
    href:"https://api.whatsapp.com/send/?phone=+79880420000&text=Здравствуйте,",
    svg: <WhatsappIcon height={28}/>,
    target: "_blank",
  },
  {
    title: "hi@villamogoh.ru",
    href: "mailto:hi@mnogoneba.com?body=Здравствуйте",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M4 3a2 2 0 0 0-2 2v.201l6 3.231l6-3.23V5a2 2 0 0 0-2-2zm10 3.337L8.237 9.44a.5.5 0 0 1-.474 0L2 6.337V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"/></svg>,
   
  },
  {
    title: "Дагестан, с. Могох",
    href: "https://clck.ru/3EPEXZ",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"/></svg>,
    target: "_blank",
  },
  {
    title: "круглосуточно",
    href: "#",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M4 12h8V4Q8.65 4 6.325 6.325T4 12"/></svg>,   
   }
];

//IMAGE Home_IMG
export const HomeIMG  = [
  {
    img: "/img/4.webp",
    alt: "1",
  },
  {
    img: "/img/5.webp",
    alt: "2",
  },
  {
    img: "/img/7.webp",
    alt: "3",
  },
  {
    img: "/img/8.webp",
    alt: "4",
  },
  {
    img: "/img/12.jpeg",
    alt: "5",
  },
  {
    img: "/img/14.jpeg",
    alt: "6",
  },
  {
    img: "/img/1.webp",
    alt: "7",
  },
  {
    img: "/img/2.webp",
    alt: "8",
  },
];


//IMAGE COT_ONE
export const cottageOneIMG  = [
  {
    img: "/img/cottageone/1.webp",
    alt: "1",
  },
  {
    img: "/img/cottageone/2.webp",
    alt: "2",
  },
  {
    img: "/img/cottageone/3.webp",
    alt: "3",
  },
  {
    img: "/img/cottageone/5.webp",
    alt: "4",
  },
  {
    img: "/img/cottageone/6.webp",
    alt: "5",
  },
  {
    img: "/img/cottageone/8.webp",
    alt: "6",
  },
  {
    img: "/img/cottageone/9.webp",
    alt: "7",
  },
  {
    img: "/img/cottageone/10.webp",
    alt: "8",
  },
  {
    img: "/img/cottageone/12.webp",
    alt: "9",
  },
  {
    img: "/img/cottageone/13.webp",
    alt: "10",
  },
  {
    img: "/img/cottageone/18.webp",
    alt: "11",
  },
  {
    img: "/img/cottageone/19.webp",
    alt: "12",
  },
];

 
//IMAGE COT_TWO
export const cottageTwoIMG  = [
  {
    img: "/img/cottageone/2.webp",
    alt: "1",
  },
  {
    img: "/img/cottageone/17.webp",
    alt: "2",
  },
  {
    img: "/img/cottageone/18.webp",
    alt: "3",
  },
  {
    img: "/img/cottageone/19.webp",
    alt: "4",
  },
  
];

//IMAGE COT_TWO
export const RussianBathhouse  = [
  {
    img: "/img/6.jpeg",
    alt: "1",
  },
  
  
];
