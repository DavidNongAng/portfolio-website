import { Github, Linkedin, Code, Database, Globe } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-[#134074] hover:text-[#13315C] transition-colors">
              David Nong-Ang
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-[#13315C] hover:text-[#134074] transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-[#13315C] hover:text-[#134074] transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-[#13315C] hover:text-[#134074] transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-[#13315C] hover:text-[#134074] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#134074] to-[#13315C] mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">DN</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#134074] mb-6">David Nong-Ang</h1>
            <p className="text-xl md:text-2xl text-[#13315C] mb-8 max-w-3xl mx-auto">
              Computer Science Student passionate about building innovative solutions and exploring new technologies
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-[#134074] hover:bg-[#134074]/90 text-white">
                <Link href="https://github.com/DavidNongAng" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-[#134074] text-[#134074] hover:bg-[#134074] hover:text-white"
              >
                <Link href="https://www.linkedin.com/in/david-nong-94509a2a8/" target="_blank">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#8DA9C4]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#134074] mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#13315C] leading-relaxed mb-6">
              I&apos;m a dedicated Computer Science student with a passion for software development and problem-solving. My
              journey in technology has led me to explore various domains including web development, data analysis, and
              software engineering principles.
            </p>
            <p className="text-lg text-[#13315C] leading-relaxed">
              I enjoy working on projects that challenge me to learn new technologies and collaborate with others. My
              goal is to contribute to meaningful projects that make a positive impact while continuously growing my
              technical skills and knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#134074] mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Stonks Project */}
            <Card className="border-2 border-[#134074]/20 hover:border-[#134074]/40 transition-colors flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#134074]">Stonks</CardTitle>
                </div>
                <CardDescription className="text-[#13315C]">Political Stock Trading Visualization Platform</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-[#13315C] mb-4 flex-grow">
                  A web application that visualizes stock trades made by U.S. politicians using data scraped from CapitolTrades. 
                  Features interactive charts for trade volume, high-volume trades, price trends, and ownership patterns with 
                  real-time data refresh via AWS Lambda.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">AWS</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Next.js</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Tailwind CSS</Badge>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#134074] text-[#134074] hover:bg-[#134074] hover:text-white mt-auto"
                >
                  <Link href="https://github.com/MohammadHossinzehi/stonks" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    View Project
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* VBTrack Project */}
            <Card className="border-2 border-[#134074]/20 hover:border-[#134074]/40 transition-colors flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-[#134074]">VBTrack</CardTitle>
                <CardDescription className="text-[#13315C]">Competitive Volleyball Match Hub</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-[#13315C] mb-4 flex-grow">
                  A MERN web application that tracks and visualizes global volleyball match data, 
                  featuring web scraping, interactive dashboards, and real-time updates with AWS deployment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">MERN Stack</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">REST API</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Python Web Scraping</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">AWS</Badge>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#134074] text-[#134074] hover:bg-[#134074] hover:text-white mt-auto"
                >
                  <Link href="https://github.com/DavidNongAng/VBTracks.git" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    View Project
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* TaskFlow Project */}
            <Card className="border-2 border-[#134074]/20 hover:border-[#134074]/40 transition-colors opacity-75 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#134074]">TaskFlow</CardTitle>
                  <Badge variant="outline" className="border-[#134074] text-[#134074]">
                    Coming Soon
                  </Badge>
                </div>
                <CardDescription className="text-[#13315C]">An advanced task management and workflow optimization tool</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-[#13315C] mb-4 flex-grow">
                  Currently developing a comprehensive task management system with advanced workflow features and team
                  collaboration tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">React</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Node.js</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Productivity</Badge>
                </div>
                <Button disabled className="w-full bg-gray-300 text-gray-500 mt-auto">
                  <Code className="w-4 h-4 mr-2" />
                  In Development
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* See More Projects Button */}
          <div className="mt-12 text-center">
            <Button 
              asChild
              className="bg-[#13315C] hover:bg-[#0B2545] text-white px-8 py-6 text-lg rounded-md shadow-md transition-all hover:shadow-lg"
            >
              <Link href="/projects">
                See More Projects
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 inline" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#8DA9C4]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#134074] mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Code className="w-12 h-12 mx-auto text-[#134074] mb-4" />
                <CardTitle className="text-[#134074]">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Python</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Java</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">C++</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-[#134074] mb-4" />
                <CardTitle className="text-[#134074]">Web & Cloud Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">React</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Next.js</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Node.js</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">AWS</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Docker</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Database className="w-12 h-12 mx-auto text-[#134074] mb-4" />
                <CardTitle className="text-[#134074]">Databases & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">MongoDB</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">PostgreSQL</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">MySQL</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Git</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">REST API</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#134074] mb-8">Get In Touch</h2>
          <p className="text-lg text-[#13315C] mb-8">
            I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <Button asChild size="lg" className="bg-[#134074] hover:bg-[#134074]/90 text-white">
              <Link href="https://github.com/DavidNongAng" target="_blank">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#134074] text-[#134074] hover:bg-[#134074] hover:text-white"
            >
              <Link href="https://www.linkedin.com/in/david-nong-94509a2a8/" target="_blank">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#134074] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 David Nong-Ang. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}