type Props = {
    title: string
    subtitle: string
    isUppercase: boolean
    isCenter: boolean
}

 const SectionHeader = ({title, subtitle, isUppercase, isCenter}: Props) => {
    return (
     <div className={`flex flex-col ${isCenter? "text-center": "text-left"}`}>
        <h1 className={`text-secondary-100 text-[18px] font-semibold "capitalize"  md:text-2xl
             ${isUppercase? "uppercase": "capitalize"}`}>{title}</h1>
        <h2 className="font-bold text-[30px]/13 capitalize  md:text-[50px]/15">{subtitle}</h2>
     </div>
    )
}
export default SectionHeader