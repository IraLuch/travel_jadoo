export type SectionId = "desitnations" | "hotels" | "flights" | "bookings";

export const navLinks : {id: SectionId; label: string}[] = [
    {id: 'desitnations', label:'Desitnations'},
     {id: 'hotels', label:'Hotels'},
      {id: 'flights', label:'Flights'},
       {id: 'bookings', label:'Bookings'},

]

export type Language = "EN" | "RU"

export const languages : {id: Language; value: string}[] = [
    {id: 'EN', value:'English'},
     {id: 'RU', value:'Russian'},


]