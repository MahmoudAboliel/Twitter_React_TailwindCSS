import { Header, Chatting, Tweets, Tweet, Customize, Loading } from "../Components";

const Middle = () => {
  return (
    <section className="middle-section">
        <Header />
        <Chatting />
        <Tweets />
        <Tweet />
        <Customize />
        <Loading />
    </section>
  );
}

export default Middle;