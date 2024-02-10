interface HeadingProps {
    title: string;
}

const Heading = ({ title }: HeadingProps) => {
    return <div className="capitalize text-white text-center text-3xl m-4">{title}</div>;
};

export default Heading;
