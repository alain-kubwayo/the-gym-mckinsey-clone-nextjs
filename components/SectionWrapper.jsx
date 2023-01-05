const SectionWrapper = ({customStyles, children}) => {
    return ( 
        <div className={customStyles}>
            {children}
        </div>
     );
}
 
export default SectionWrapper;