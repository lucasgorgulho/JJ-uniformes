"use client"

import type React from "react"

import { useState } from "react"

import { Facebook, Instagram, Linkedin, Send, MessageCircle, CheckCircle2, X } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    setTimeout(() => setFormStatus("sent"), 1500)
  }

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Envie sua Mensagem</h2>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Preencha o formulário ou entre em contato pelo WhatsApp
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 order-2 lg:order-1">
            {formStatus === "sent" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600 text-sm mb-5">Retornaremos em breve.</p>
                <Button
                  variant="outline"
                  onClick={() => setFormStatus("idle")}
                  className="border-teal-600 text-teal-600"
                >
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome Completo *</label>
                  <Input placeholder="Digite seu nome completo" required className="h-11 text-base" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail *</label>
                    <Input type="email" placeholder="seu@email.com" required className="h-11 text-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone</label>
                    <Input type="tel" placeholder="(11) 98765-4321" className="h-11 text-base" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Assunto</label>
                  <Input placeholder="Qual o assunto?" className="h-11 text-base" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem *</label>
                  <Textarea placeholder="Escreva sua mensagem..." rows={3} className="resize-none text-base" required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white h-11 sm:h-12 text-sm font-semibold gap-2"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                {/* Social Links */}
                <div className="pt-4 border-t">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-sm text-gray-600">Siga-nos nas Redes</p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-blue-600 hover:bg-blue-700 text-white border-0 w-9 h-9"
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white border-0 w-9 h-9"
                      >
                        <Instagram className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-blue-700 hover:bg-blue-800 text-white border-0 w-9 h-9"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-black hover:bg-gray-800 text-white border-0 w-9 h-9"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Map & Info Section */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            {/* WhatsApp Quick Action */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm sm:text-base">Prefere WhatsApp?</h3>
                  <p className="text-white/80 text-xs">Resposta mais rápida!</p>
                </div>
                <Button className="bg-white text-green-600 hover:bg-white/90 font-semibold h-9 px-4 text-sm flex-shrink-0">
                  Chamar
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden flex-1 min-h-[280px] sm:min-h-[320px]">
              <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975455874316!2d-46.65369368502207!3d-23.561413684682866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1621234567890!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Nosso Endereço</h4>
                <p className="text-gray-600 text-xs">Rua Industrial 45, São Paulo - SP</p>
                <div className="flex items-center gap-2 text-teal-600 text-xs font-medium mt-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                  Seg-Sex, 8h às 18h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
