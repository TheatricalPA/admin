import Link from "next/link"
import { redirect } from "next/navigation"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { SettingsIcon } from "lucide-react"

import { appClient, managementClient } from "@/lib/auth0"
import { Button } from "@/components/ui/button"
import { Auth0Logo } from "@/components/auth0-logo"
import { ModeToggle } from "@/components/mode-toggle"
import { OrganizationSwitcher } from "@/components/organization-switcher"
import { UserNav } from "@/components/user-nav"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await appClient.getSession()

  // if the user is not authenticated, redirect to login
  if (!session?.user) {
    const searchParams = "organization=org_ATqu7coKNwyXgCmW";

    redirect(`/api/auth/login?${searchParams}`);    
  }

  const { data: orgs } = await managementClient.users.getUserOrganizations({
    id: session.user.sub,
  })

  return (
    <UserProvider>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4 sm:px-8">
        <div className="flex items-center space-x-6">
          <OrganizationSwitcher
            organizations={orgs.map((o) => ({
              id: o.id,
              slug: o.name,
              displayName: o.display_name!,
              logoUrl: o.branding?.logo_url,
            }))}
            currentOrgId={session.user.org_id}
          />
        </div>

        <div className="flex flex-row gap-x-4">
          <UserNav />
        </div>
      </nav>

      <main className="mx-auto grid min-h-[calc(100svh-164px)] max-w-7xl px-2 sm:px-8 lg:py-6">
        {children}
      </main>

      <footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
          </div>

          <div className="items-center gap-x-2">
            <ModeToggle />
          </div>
        </div>
      </footer>
    </UserProvider>
  )
}
