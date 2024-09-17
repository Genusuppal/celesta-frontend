import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Team_template from "@/components/team/team";
import images from "@/constants/images";

export default function Team() {
	return (
		<div className="w-full h-screen text-[#D9D9D9] relative">
			<Header />
			<div className="w-full h-screen bg-[url('/SponsBG.jpeg')] bg-cover bg-center bg-no-repeat fixed z-[-1] top-0 left-0"></div>
			<div className="mb-12 container min-h-screen h-auto pt-[80px] md:pb-0` pb-[50px] flex md:flex-row md:justify-around md:items-start flex-col justify-start items-center gap-[20px]">
				<TeamMain />
			</div>
			<Footer />
		</div>
	);
}

function TeamMain() {
	return (
		<div>
        <Team_template team_name="Development Team" coordsarray={images.dev_CoordsImages} subcoordsarray={images.dev_SubCoordsImages}/>
        <Team_template team_name="Events" coordsarray={images.events_CoordsImages} subcoordsarray={images.events_SubCoordsImages}/>
        <Team_template team_name="Creatives And Designs" coordsarray={images.events_CoordsImages} subcoordsarray={images.events_SubCoordsImages}/>
        <Team_template team_name="RSP Committee" coordsarray={images.events_CoordsImages} subcoordsarray={images.events_SubCoordsImages}/>
		</div>
	);
}
