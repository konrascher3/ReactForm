import MeetupItem from "../../components/meetups/MeetupItem";
import MeetupList from "../../components/meetups/MeetupList";

const dummy_data = [
  {
    id: "m1",
    title: "Todesstern: Tag der offenen Tür",
    image:
      "https://imgs.search.brave.com/pGsikvi_s4UFUuM_jTwAp6yR-rMu7adaAwu7INyY6nM/rs:fit:979:535:1/g:ce/aHR0cHM6Ly9ibG9n/LmluZGllZ2FsYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDgvRGVhdGgt/U3Rhci5wbmc",
    imagePosition: "0px 15px",
    address: "Irgendwo im All",
    description:
      "Das Imperium lädt Interessenten herzlich zum ersten Tag der offenen Tür ein! Es gibt Snacks und Erfrischungen."
  },
  {
    id: "m2",
    title: "Das große Schneckenrennen",
    image: "https://i.ibb.co/4486SQB/The-Great-Snail-Race-142.webp",
    imagePosition: "0px -20px",
    address: "Bikini Bottom: Colloseum",
    description: `Sicher dir jetzt Karten und sei dabei beim adrenalingeladensten Event des Jahres ${new Date().getFullYear()}: das Bikini Bottom Schneckenrennen`
  }
];

export default function AllMeetups() {
  return (
    <>
      <h1>All Meetups</h1>
      <MeetupList>
        {dummy_data.map((data) => {
          return (
            <MeetupItem
              key={data.id}
              title={data.title}
              address={data.address}
              description={data.description}
              imageLink={data.image}
              imagePosition={data.imagePosition}
            />
          );
        })}
      </MeetupList>
    </>
  );
}
