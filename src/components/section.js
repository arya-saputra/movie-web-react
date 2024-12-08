const Section = ({Children, Title}) => (
    <div className="py-8">
       <h1 className="text-[2em] font-bold mb-5 text-[white]">{Title}</h1>
       <div>
        {Children}
       </div>
    </div>
)

export default Section;