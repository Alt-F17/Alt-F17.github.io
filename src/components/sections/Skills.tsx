import { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FaPython, FaHtml5, FaLinux, FaGitAlt, FaUserSecret, FaMicrochip } from 'react-icons/fa';

const skills = [
	{ name: 'Python Development', icon: FaPython },
	{ name: 'HTML/CSS', icon: FaHtml5 },
	{ name: 'Machine Learning', icon: FaMicrochip },
	{ name: 'Windows & Linux CLI', icon: FaLinux },
	{ name: 'Git and Github', icon: FaGitAlt },
	{ name: 'HackTheBox Academy', icon: FaUserSecret },
];

export const Skills = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement[]>([]);

	const addToCardsRef = (el: HTMLDivElement) => {
		if (el && !cardsRef.current.includes(el)) {
			cardsRef.current.push(el);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in');
					}
				});
			},
			{ threshold: 0.1 }
		);

		cardsRef.current.forEach((card) => observer.observe(card));

		return () => {
			cardsRef.current.forEach((card) => observer.unobserve(card));
		};
	}, []);

	return (
		<section id="skills" className="section" ref={sectionRef}>
			<div className="container-padding max-w-5xl mx-auto">
				<h2 className="section-title">
					<span className="text-space-accent">/</span> Skills & Interests
				</h2>
				<p className="section-subtitle">What I bring to the table</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{skills.map((skill, index) => (
						<div
							key={skill.name}
							ref={addToCardsRef}
							className="opacity-0 transform translate-y-4 transition-all duration-700"
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<Card className="bg-space-darker border-space-accent/20 lg:border-4 overflow-hidden">
								<CardContent className="p-6">
									<div className="flex items-center mb-2">
										<skill.icon className="w-6 h-6 text-space-accent mr-3" />
										<h3 className="text-lg font-medium">{skill.name}</h3>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>

				<div
					ref={addToCardsRef}
					className="mt-12 opacity-0 transform translate-y-4 transition-all duration-700"
					style={{ transitionDelay: `${skills.length * 100}ms` }}
				>
					<Card className="bg-space-darker border-space-accent/20 lg:border-4">
						<CardContent className="p-6">
							<h3 className="text-xl font-medium mb-4">
								Current Focus & Aspirations
							</h3>
							<ul className="space-y-3 list-disc list-inside text-space-text/80">
								<li>
									Working on PLUTO - a personal AI assistant that's local,
									open-source, customizable, and privacy-focused.
								</li>
								<li>
									Daily work on improving ethical hacking and cybersecurity
									skills through HackTheBox Academy.
								</li>
								<li>
									Aspiring to become a part-time ethical hacker (HTB Academy
									certified) and machine learning engineer.
								</li>
								<li>
									Active in Dawson College community, working on founding
									Dawson Coding & DawsHack Dawson Hackathon clubs.
								</li>
							</ul>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Skills;
