import { Wallet } from "lucide-react";
import { Outlet } from "react-router";
import { env } from "./config/env";
import ActionLink from "./components/ActionLink";

export default function Layout() {
  return (
    <>
      <header className="bg-white border-b border-neutral-200 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 items-center">
            <div className="bg-emerald-500 text-white p-3 rounded-lg">
              <Wallet />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Net Split</h2>
              <p className="text-sm text-neutral-500">Split group expenses fairly and instantly.</p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto min-h-screen py-6">
        <Outlet />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto  py-8 px-4 ">
          <div className="flex justify-between items-center">
            {env.showDigitalHeroes ? (
              <>
                <div>
                  <h3 className="font-semibold">Muhammed Nasim K</h3>
                  <ActionLink href="mailto:md.nasimkuniyil@gmail.com" >md.nasimkuniyil@gmail.com</ActionLink>
                </div>
                <div>
                  <ActionLink href="https://digitalheroesco.com/" fill>Built for Digital Heroes</ActionLink>
                </div>
              </>
            ) : (
              <>
                <div>
                  <ActionLink href="https://nasimkuniyil.in">nasimkuniyil</ActionLink>
                </div>
                <div className="space-x-4">
                  <ActionLink href="https://github.com/nasimkuniyil">Github</ActionLink>
                  <ActionLink href="https://linkedin.com/in/nasimkuniyil">Linkedin</ActionLink>
                </div>
              </>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
