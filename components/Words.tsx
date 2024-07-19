import Word from "@/components/Word";
import { Vocabulary } from "@prisma/client";

const Words = ({ vocabulary }: { vocabulary: Vocabulary[] }) => {
    return (
        vocabulary && (
            <ul>
                {vocabulary.map((vocab) => (
                    <li key={vocab.id}>
                        <Word {...vocab} />
                    </li>
                ))}
            </ul>
        )
    );
};

export default Words;
