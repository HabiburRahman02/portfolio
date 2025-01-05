import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Education = () => {
    return (
        <div className="max-w-[1300px] mx-auto my-16 lg:my-24">
            <div className='mb-8'>
                <SectionTitle title='Educational Qualification_'></SectionTitle>
            </div>

            <VerticalTimeline lineColor='pink'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"

                    contentStyle={{
                        background: "linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))",
                        color: "#fff"
                    }}

                    contentArrowStyle={{ borderRight: '7px solid  rgb(6, 182, 212)' }}
                    date="2018 - 2020 "
                    dateClassName='dark:text-white lg:text-blue-900'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <div className='space-y-1'>

                        <h3 className="vertical-timeline-element-title text-3xl pb-4">Diploma In Computer Science & Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">CGPA : 3.75 (7th semester)</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Institute : Sherpur Polytechnic Institute</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Board : Bangladesh Technical Education Board</h4>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"

                    contentStyle={{ background: "linear-gradient(to right, rgb(99, 102, 241), rgb(236, 72, 153))", color: '#fff' }}

                    contentArrowStyle={{ borderRight: '7px solid  rgb(59, 130, 246)' }}
                    date="2021 - 2024"
                    dateClassName='dark:text-white lg:text-pink-900'

                    iconStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
                    iconClassName=''
                >
                    <div className='space-y-1'>
                        <h3 className="vertical-timeline-element-title text-3xl pb-4">Secondary School Certificate</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Department : Business Studies</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg">School : Sheikh Rasel Govt High School</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg">Board : Mymensingh Board</h4>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Education;