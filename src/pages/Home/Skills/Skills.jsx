import htmlImg from '../../../assets/images/skills/html.png'
import css from '../../../assets/images/skills/css.png'
import js from '../../../assets/images/skills/js.png'
import tailwind from '../../../assets/images/skills/tailwind.png'
import bootstrap from '../../../assets/images/skills/bootstrap.png'
import node from '../../../assets/images/skills/node-js.png'
import react from '../../../assets/images/skills/react.png'
import express from '../../../assets/images/skills/express.png'
import mongoDB from '../../../assets/images/skills/mongoDb.png'
import firebase from '../../../assets/images/skills/firebase.png'
import github from '../../../assets/images/skills/github.png'


import Marquee from 'react-fast-marquee'

const Skills = () => {
    return (
        <div className=" mt-32 text-center">
            <h1 className="text-5xl font-bold  text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 ">Skills_ </h1>
            <Marquee>
                <div className='grid grid-cols-3 md:grid-cols-8 gap-3 m-3 my-16'>
                    <div className='bg-gradient-to-b from-red-900 to-red-600 rounded-lg flex items-center justify-center px-12 py-6'>
                        <div>
                            <div>
                                <img src={htmlImg} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Html</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-sky-900 to-sky-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={css} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Css</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-yellow-900 to-yellow-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={js} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Javascript</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-indigo-900 to-indigo-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={bootstrap} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Bootstrap</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-cyan-900 to-cyan-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={tailwind} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Tailwind</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-green-900 to-green-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={node} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Node</p>
                        </div>
                    </div>

                    <div className='bg-gradient-to-b from-blue-900 to-blue-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={react} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>React</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-sky-900 to-sky-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={express} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Express</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-emerald-900 to-emerald-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={mongoDB} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>MongoDB</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-amber-900 to-amber-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={firebase} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Firebase</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-zinc-900 to-zinc-600 rounded-lg flex items-center justify-center py-6'>
                        <div>
                            <div>
                                <img src={github} alt="" />
                            </div>
                            <p className='text-xl mt-2 text-white font-bold'>Github</p>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Skills;
