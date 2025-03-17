import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept/CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
    return (
        <Section
            id="core-concepts"
            title="Time to get started!">
            <ul>
                {CORE_CONCEPTS.map((item) => (
                    <CoreConcept key={item.title} {...item} />
                ))}
            </ul>
        </Section>
    )
}