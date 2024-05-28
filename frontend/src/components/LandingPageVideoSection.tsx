import videoBg from "../assets/videoBg.mp4";

const LandingPageVideoSection = () => {
    return (
        <>
            <div className="video">
                <video src={videoBg}
                       autoPlay
                       loop
                       muted/>
            </div>
            <div className="video-text">
                <h1>Willkommen bei Basti Bank</h1>
                <p>Deine Bank für alle Finanzgeschäfte</p>
            </div>
        </>
    );
};

export default LandingPageVideoSection;