import LandingBanner from "../src/components/LandingBanner/LandingBanner";
import LandingInfo from "../src/components/LandingInfo/LandingInfo";
import LandingLayout from "../src/components/LandingLayout/LandingLayout";

export default function Home() {
	return (
		<LandingLayout>
			<LandingBanner />
			<LandingInfo />
			<h1>sadas</h1>
		</LandingLayout>
	);
}
