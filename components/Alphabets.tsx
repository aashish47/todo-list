import { AlphabetButton } from "@/components/buttons/AlphabetButton";
import alphabets from "@/utils/alphabets";

const Alphabets = () => {
    return (
        <div className="flex gap-3 flex-wrap justify-center">
            {alphabets.map((alpha) => (
                <AlphabetButton
                    key={alpha}
                    alpha={alpha}
                />
            ))}
        </div>
    );
};

export default Alphabets;
