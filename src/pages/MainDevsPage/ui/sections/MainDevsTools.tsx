import { Tools } from "shared/ui/Tools/Tools";


export const MainDevsTools = () => {
  return (
    <section className='relative cv-Instruments mb-[180px] w-1158:mb-[50px] w-800:mb-[30px]'>
        <div className="container">
            <h2 className='bigTitle text-center'>Что мы используем в работе</h2>
            <div className="flex justify-center items-center gap-[250px] mt-[75px]">
                <Tools />
                        <div className='flex gap-[50px] text-xl'>
                            <ul>
                                <li className="mb-[20px]">
                                    <h3>Frontend:</h3>
                                </li>
                                <li>- HTML</li>
                                <li>- CSS</li>
                                <li>- Sass</li>
                                <li>- jQuery</li>
                                <li>- JavaScript</li>
                                <li>- TypeScript</li>
                                <li>- React</li>
                                <li>- Redux</li>
                            </ul>
                            <ul>
                                <li className="mb-[20px]">
                                    <h3>Backend:</h3>
                                </li>
                                <li>- Node js</li>
                                <li>- Express js</li>
                                <li>- PHP</li>
                                <li>- MySQL</li>
                            </ul>
                            <ul>
                                <li className="mb-[20px]">
                                    <h3>Design:</h3>
                                </li>
                                <li>- Figma</li>
                                <li>- Adobe Illustrator</li>
                                <li>- Adobe Photoshop</li>
                            </ul>
                            <ul>
                                <li className="mb-[20px]">
                                    <h3>CMS:</h3>
                                </li>
                                <li>- WordPress</li>
                                <li>- Joomla</li>
                            </ul>
                        </div>
            </div>
        </div>
    </section >
  );
}
