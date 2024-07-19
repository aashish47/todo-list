import { DeleteButton, EditButton } from "@/components/buttons/wordActions";
import type { Vocabulary } from "@prisma/client";

const Word = ({ id, word }: Vocabulary) => {
    return (
        <div className="bar-cyan flex justify-between mb-3">
            {word}
            <div className="flex gap-4 ">
                <EditButton
                    id={id}
                    word={word}
                />
                <DeleteButton
                    id={id}
                    word={word}
                />
            </div>
        </div>
    );
};

export default Word;
