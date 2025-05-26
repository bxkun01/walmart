const RegistrationFooter = () => {
    const footers=['CA privacy Rights','Do Not sell MY personal Information',
      'Notice at Collection','Request My Personal Information','California Supply Chains Act']
  return (
    <footer className="flex flex-col px-4 py-1">
        
        <ul className=" flex flex-col gap-4 lg:flex-row lg:justify-center" >
          <span className="text-xs text-gray-600 cursor-pointer hidden lg:inline-block lg:mx-14">© 2025 Walmart. All Rights Reserved.</span>
            {footers.map((footer,index)=><li key={index} className="text-sm text-gray-600 cursor-pointer">{footer}</li>)}
            <span className="text-xs text-gray-600 cursor-pointer lg:hidden">© 2025 Walmart. All Rights Reserved.</span>
        </ul>
       
        
    </footer>

  )
}

export default RegistrationFooter