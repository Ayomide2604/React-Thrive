import old from "../assets/img/services/old.svg";
import oldDetail from "../assets/img/services/geriatrics.jpg";
import baby from "../assets/img/services/baby.svg";
import pediatrics from "../assets/img/services/pediatrics.jpg";
import brain from "../assets/img/services/brain.svg";
import neurology from "../assets/img/services/neurology.jpg";
import skeleton from "../assets/img/services/skeleton.svg";
import orthopedics from "../assets/img/services/orthopaedics.jpg";
import surgery from "../assets/img/services/surgery.svg";
import postSurgery from "../assets//img/services/post-surgery.jpg";
import oncology from "../assets/img/services/oncology.svg";
import oncologyDetail from "../assets/img/services/oncology.jpg";
const services = [
	{
		id: 1,
		name: "Elderly Care and Rehabilitation",
		image: old,
		title: "Our geriatric physiotherapy services address conditions such as:",
		subTitle: "Enhancing mobility and quality of life for elderly patients.",
		items: ["Arthritis", "Osteoporosis", "Balance Disorders"],
		detailHeader: `
      <p>
        At <strong>Thrive Home Physio</strong>, we specialize in
        providing expert physiotherapy for older adults in the comfort
        of their homes.
      </p>
      <p>
        Our highly skilled geriatric physiotherapists understand the
        difference between normal ageing and age-related conditions such
        as dementia, falls, fractures, stroke, Parkinson’s disease,
        arthritis, and post-surgical recovery.
      </p>
      <p>
        A comprehensive physiotherapy assessment is at the heart of our
        approach, allowing us to develop personalized rehabilitation
        plans that improve mobility, balance, strength, and
        independence.
      </p>
      <p>
        We don’t just provide exercises, we deliver hands-on therapy and
        practical solutions to enhance functionality and quality of
        life.
      </p>`,
		detailFooter: `
      <p>
        Our dementia-trained specialists ensure safe, compassionate care
        for those with cognitive challenges, recognizing that
        rehabilitation is most effective in a familiar home environment.
      </p>
      <p>
        If you or your loved one needs expert elderly physiotherapy,
        contact us today to schedule an assessment.
      </p>`,
		detailImage: oldDetail,
		detailItems: [
			"Detailed movement and mobility assessments",
			"Pain relief techniques",
			"Falls prevention strategies & balance training",
			"Walking aid prescription & home safety modifications",
			"Carer and family training for safe mobility support",
			"Post-surgical and neurological rehabilitation",
			"Maintenance physiotherapy to prevent deterioration",
		],
	},
	{
		id: 2,
		name: "Pediatric Physiotherapy",
		image: baby,
		title:
			"We specialize in pediatric physiotherapy to support children with conditions like:",
		subTitle: "Promoting their growth and development.",
		items: ["Cerebral palsy", "Developmental delays", "Muscular dystrophy"],
		detailHeader: `
      <p>
        At Thrive Home Physio, our team of highly skilled pediatric
        physiotherapists specializes in treating babies, children, and
        young adults (0-19 years old). We combine expert clinical care
        with a fun and engaging approach, ensuring a positive
        experience for both the child and their parents.
      </p>`,
		detailFooter: `
      <p>
        At Thrive Home Physio, we are committed to providing
        compassionate and expert care to help our patients achieve their
        rehabilitation goals. Our team works closely with each patient
        to develop a customized treatment plan that addresses their
        specific needs and challenges.
      </p>`,
		detailImage: pediatrics,
		detailItems: [
			"Individualized assessments tailored to each child’s needs",
			"Goal-setting in collaboration with parents, carers, and children",
			"Personalized treatment plans to improve mobility, coordination, balance, strength, and independence",
			"Hands-on therapy including stretches, massage, soft tissue mobilization, and postural advice",
			"Carer and parent training to support progress at home",
		],
	},
	{
		id: 3,
		name: "Neuro Physiotherapy",
		image: brain,
		title:
			"Our neurology services focus on diagnosing and treating conditions such as:",
		subTitle: "Providing comprehensive care for nervous system disorders.",
		items: ["Stroke", "Traumatic Brain Injuries", "Parkinson's disease"],
		detailHeader: `
      <p>
        Neurological physiotherapy, also known as neuro physiotherapy,
        is a specialized form of rehabilitation designed to help
        individuals with neurological conditions affecting the brain,
        spinal cord, and nervous system.
      </p>
      <p>
        Whether due to illness or trauma, these conditions can impact
        movement, strength, coordination, and overall well-being. With
        expert physiotherapy, individuals can experience improved
        mobility, function, and quality of life.
      </p>`,
		detailFooter: `
      <p>
        At Thrive Home Physio, we bring expert neurological
        physiotherapy to your doorstep, offering convenient and flexible
        home-based care.
      </p>`,
		detailImage: neurology,
		detailItems: [
			"Personalized neurological rehabilitation programs tailored to each individual",
			"Hands-on therapy to enhance mobility, strength, and coordination",
			"Balance and posture training to reduce falls and improve stability",
			"Functional exercises to regain independence in daily tasks",
			"Cognitive and emotional support to boost confidence and overall well-being",
		],
	},
	{
		id: 4,
		name: "Muscle & Joint Injuries",
		image: skeleton,
		title:
			"We offer specialized musculoskeletal services to address issues like:",
		subTitle: "Helping patients regain strength and mobility.",
		items: ["Back pain", "Sports Injuries", "Joint Replacements"],
		detailHeader: `
      <p>
        At Thrive Home Physio, we provide specialized treatment for
        muscle and joint injuries, helping you recover from pain,
        stiffness, and reduced mobility. Whether it’s a sports injury,
        chronic condition, or postural issue, our expert
        physiotherapists deliver hands-on care to restore movement,
        reduce pain, and strengthen weak muscles.
      </p>`,
		detailFooter: `
      <p>
        Our goal is to help you move pain-free, confidently, and
        independently.
      </p>`,
		detailImage: orthopedics,
		detailItems: [
			"Comprehensive assessment & diagnosis",
			"Pain relief techniques (massage, soft tissue mobilization)",
			"Postural correction & movement retraining",
			"Strengthening & flexibility exercises",
		],
	},
	{
		id: 5,
		name: "Post-Operative Therapy",
		image: surgery,
		title: "Our post-surgery recovery services focus on:",
		subTitle: "Ensuring a smooth and effective recovery process.",
		items: ["Pain management", "Mobility restoration", "Strength rebuilding"],
		detailHeader: `
      <p>
        The period after surgery can be challenging, but Thrive Home
        Physio is here to support you. Our specialized post-operative
        physiotherapy helps reduce the risk of complications, improve
        mobility, restore strength, and enhance overall recovery.
      </p>`,
		detailFooter: `
      <p>
        At Thrive Home Physio, we bring expert neurological
        physiotherapy to your doorstep, offering convenient and flexible
        home-based care.
      </p>`,
		detailImage: postSurgery,
		detailItems: [
			"Personalized neurological rehabilitation programs tailored to each individual",
			"Hands-on therapy to enhance mobility, strength, and coordination",
			"Balance and posture training to reduce falls and improve stability",
			"Functional exercises to regain independence in daily tasks",
			"Cognitive and emotional support to boost confidence and overall well-being",
		],
	},
	{
		id: 6,
		name: "Oncology",
		image: oncology,
		title: "Our consultation services provide:",
		subTitle: "To help you achieve your health goals.",
		items: ["Expert Advice", "Personalized Treatment Plans", "Ongoing Support"],
		detailHeader: `
      <p>
        Diagnosis of cancer and undergoing treatment can be a
        stressful time. Cancer treatment affects strength, stamina,
        mobility, and function. Evidence suggests that rehabilitation
        should start as soon as possible and continue to achieve
        better outcomes with reduced healing times.
      </p>
      <p>
        We provide a holistic rehabilitation program aimed at
        enhancing stamina and functional abilities. Our team consists
        of highly competent physiotherapists who provide treatment
        based on current evidence. Let us help you get back to living
        a quality life.
      </p>`,
		detailFooter: `
      <p>
        At Thrive Physiotherapy, we are committed to providing
        compassionate and expert care to help our patients achieve their
        rehabilitation goals. Our team works closely with each patient
        to develop a customized treatment plan that addresses their
        specific needs and challenges.
      </p>`,
		detailImage: oncologyDetail,
		detailItems: [
			"Personalized treatment plans tailored to individual needs",
			"Exercises to improve strength, flexibility, and mobility",
			"Pain management techniques to alleviate discomfort",
			"Fatigue management strategies to enhance energy levels",
			"Emotional support and counseling to cope with stress",
			"Education on self-management techniques for ongoing care",
		],
	},
];

export default services;
