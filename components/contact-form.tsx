"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-[rgb(var(--color-text-light))] mb-12">Contact Us</h2>
        <div className="grid grid-cols-2 gap-16">
          <form className="space-y-6">
            <Input type="text" placeholder="Name" className="bg-[rgb(var(--color-form-bg))] border-none" />
            <Input type="tel" placeholder="Phone Number" className="bg-[rgb(var(--color-form-bg))] border-none" />
            <Input type="email" placeholder="Email" className="bg-[rgb(var--color-form-bg))] border-none" />
            <Textarea placeholder="Message" className="bg-[rgb(var(--color-form-bg))] border-none min-h-[150px]" />
            <Button
              type="submit"
              className="bg-[rgb(var(--color-primary))] text-white hover:bg-[rgb(var(--color-primary))/90] inline-flex items-center"
            >
              SEND EMAIL <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Contact visual"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

