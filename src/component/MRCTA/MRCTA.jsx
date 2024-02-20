const MRCTA = ({
    text,
    link = "javascript:;",
    classes = "",
    bg = "bg-primary-100",
    color = "text-white",
    border = "border-transparent"
}) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<a href="${link}" class="w-max h-[50px] ${bg} ${color} flex items-center px-5 font-sans font-semibold border-2 transition-all ${border} ${classes}">${text}</a>` }} />
    )
}

export default MRCTA