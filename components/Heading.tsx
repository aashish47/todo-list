interface HeadingProps {
    title: string;
}

const Heading = ({ title }: HeadingProps) => {
    return <div className="capitalize text-white text-center text-3xl">{title}</div>;
};

export default Heading;
