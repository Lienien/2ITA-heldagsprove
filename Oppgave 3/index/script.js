var personer = [
  {
    navn: "Runar Bålsrud",
    telefonJobb: "+4799988777",
    telefonPrivat: "+478885522",
    epost: "runar@avfallnorge.no",
    stilling: "Administrerende direktør",
    bilder: [
      {
        avatar1:
          "https://robohash.org/laudantiumetreprehenderit.png?size=300x300&set=set1",
      },
      {
        avatar2:
          "https://robohash.org/quidemvoluptasconsequatur.png?size=300x300&set=set1",
      },
      {
        bildet:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },

  {
    navn: "Sara Wilsgaard",
    telefonJobb: "+4777788999",
    telefonPrivat: "+478885522",
    epost: "sara.wilsgaard@avfallnorge.no",
    stilling: "Medlemskommunikasjon, bærekraft og ombruk.",
    bilder: [
      {
        avatar1:
          "https://robohash.org/temporibussitveniam.png?size=300x300&set=set1",
      },
      { 
        avatar2: 
          "https://robohash.org/illoipsamet.png?size=300x300&set=set1" 
      },
      {
        bildet: 
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ],
  },
];


const runarIndex = personer.findIndex(person => person.navn === "Runar Bålsrud");
const saraIndex = personer.findIndex(person => person.navn === "Sara Wilsgaard");

const runarAvatar1 = personer[runarIndex].bilder[0].avatar1;
const runarAvatar2 = personer[runarIndex].bilder[1].avatar2;

document.getElementById("avatar1").src = runarAvatar1;
document.getElementById("avatar2").src = runarAvatar2;

personer[runarIndex].telefonPrivat = "+4711122333";

delete personer[saraIndex].telefonJobb;

console.log(personer);