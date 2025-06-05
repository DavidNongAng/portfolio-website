import { Github, ExternalLink, Calendar } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
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
              <Link href="/#about" className="text-[#13315C] hover:text-[#134074] transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-[#134074] font-semibold">
                Projects
              </Link>
              <Link href="/#skills" className="text-[#13315C] hover:text-[#134074] transition-colors">
                Skills
              </Link>
              <Link href="/#contact" className="text-[#13315C] hover:text-[#134074] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#134074] mb-6">All Projects</h1>
          <p className="text-xl text-[#13315C] mb-8 max-w-3xl mx-auto">
            A comprehensive collection of my software development projects, showcasing various technologies and problem-solving approaches.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            
            {/* Stonks Project */}
            <Card className="border-2 border-[#134074]/20 hover:border-[#134074]/40 transition-colors flex flex-col h-full max-w-lg mx-auto w-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-[#134074] text-xl">Stonks</CardTitle>
                </div>
                <CardDescription className="text-[#13315C] text-base">
                  Political Stock Trading Visualization Platform
                </CardDescription>
                <div className="flex items-center text-sm text-[#8DA9C4] mt-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2025
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-[#13315C] mb-6 flex-grow text-base leading-relaxed">
                  A comprehensive web application that visualizes stock trades made by U.S. politicians using data scraped from CapitolTrades. 
                  Features interactive charts for trade volume analysis, high-volume trades tracking, price trends by company, and ownership patterns. 
                  Includes real-time data refresh capabilities via AWS Lambda and API Gateway with responsive, mobile-friendly design.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#134074] mb-3">Key Features:</h4>
                  <ul className="text-[#13315C] text-sm space-y-1 mb-4">
                    <li>• Interactive charts for trade volume and ownership patterns</li>
                    <li>• Real-time data refresh via AWS Lambda + API Gateway</li>
                    <li>• Automated data formatting and cleaning</li>
                    <li>• Responsive design built with Tailwind CSS</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Next.js 15</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">AWS Lambda</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">API Gateway</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">AWS Amplify</Badge>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-[#134074] text-[#134074] hover:bg-[#134074] hover:text-white"
                  >
                    <Link href="https://github.com/MohammadHossinzehi/stonks" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-[#134074] hover:bg-[#134074]/90 text-white"
                  >
                    <Link href="https://main.d3mjnwrqvz2taq.amplifyapp.com/" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ICantFindAnInternship Project */}
            <Card className="border-2 border-[#134074]/20 hover:border-[#134074]/40 transition-colors flex flex-col h-full max-w-lg mx-auto w-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-[#134074] text-xl">ICantFindAnInternship</CardTitle>
                </div>
                <CardDescription className="text-[#13315C] text-base">
                  Full-Stack Internship Search Web Application
                </CardDescription>
                <div className="flex items-center text-sm text-[#8DA9C4] mt-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2024
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-[#13315C] mb-6 flex-grow text-base leading-relaxed">
                  A comprehensive MERN stack web application designed specifically for students seeking internship opportunities. 
                  Similar to LinkedIn&apos;s job search functionality but exclusively focused on internships. Integrates with the Adzuna API 
                  to fetch and filter job listings, enabling users to perform full CRUD operations on their saved listings.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#134074] mb-3">Key Features:</h4>
                  <ul className="text-[#13315C] text-sm space-y-1 mb-4">
                    <li>• Adzuna API integration for real-time job listings</li>
                    <li>• User authentication with JWT tokens</li>
                    <li>• CRUD operations for saved internship listings</li>
                    <li>• Redux state management for consistent user sessions</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">MongoDB</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Express.js</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">React</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Node.js</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Redux</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">JWT</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">AWS</Badge>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-[#134074] text-[#134074] hover:bg-[#134074] hover:text-white"
                  >
                    <Link href="https://github.com/DavidNongAng/ICantFindAnInternship" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-[#134074] hover:bg-[#134074]/90 text-white"
                  >
                    <Link href="#" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* TaskFlow Project */}
            <Card className="border-2 border-[#134074]/20 hover:border-[#134074]/40 transition-colors flex flex-col h-full max-w-lg mx-auto w-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-[#134074] text-xl">TaskFlow</CardTitle>
                  <Badge variant="outline" className="border-[#134074] text-[#134074]">
                    Coming Soon
                  </Badge>
                </div>
                <CardDescription className="text-[#13315C] text-base">
                  Advanced Task Management and Workflow Optimization Tool
                </CardDescription>
                <div className="flex items-center text-sm text-[#8DA9C4] mt-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2025 (In Development)
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-[#13315C] mb-6 flex-grow text-base leading-relaxed">
                  Currently developing a comprehensive task management system designed to optimize workflow efficiency for teams and individuals. 
                  The application will feature advanced workflow automation, team collaboration tools, and intelligent task prioritization algorithms.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#134074] mb-3">Planned Features:</h4>
                  <ul className="text-[#13315C] text-sm space-y-1 mb-4">
                    <li>• Advanced workflow automation and optimization</li>
                    <li>• Real-time team collaboration tools</li>
                    <li>• Intelligent task prioritization algorithms</li>
                    <li>• Comprehensive analytics and reporting</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">React</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Node.js</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">PostgreSQL</Badge>
                  <Badge variant="secondary" className="bg-[#8DA9C4] text-[#0B2545]">Docker</Badge>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-[#134074] text-[#134074] hover:bg-[#134074] hover:text-white"
                  >
                    <Link href="https://github.com/DavidNongAng/TaskFlow" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-[#134074] hover:bg-[#134074]/90 text-white"
                  >
                    <Link href="https://main.d3mjnwrqvz2taq.amplifyapp.com/" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Button 
            asChild
            variant="outline"
            className="border-[#134074] text-[#134074] hover:bg-[#134074] hover:text-white px-8 py-3"
          >
            <Link href="/">
              ← Back to Home
            </Link>
          </Button>
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