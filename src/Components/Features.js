import Container from "./Container";
import { featuresData } from "../libs/StaticData";

export default function Features() {
  return (
    <div className="bg-main-color">
      <Container className="space-y-10">
        {featuresData.map((feature, i) => (
          <div
            key={i}
            className={`md:flex ${
              (i + 1) % 2 === 0 ? "flex-row-reverse" : ""
            } text-white`}
          >
            <img src={feature.img} alt="Feature 1" />
            <div className="flex items-center">
              <div className="space-y-3">
                <h2 className="font-bold text-3xl">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
