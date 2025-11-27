import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;

  // Mock response for sunshine-dental or vendorA
  if (slug === "vendorA" || slug === "sunshine-dental") {
    return NextResponse.json({
      success: true,
      data: {
        name: slug === "sunshine-dental" ? "Sunshine Dental" : "Vendor A",
        slug: slug,
        websiteConfig: {
          schemaVersion: "1.0.0",
          theme: {
            name: "Tide",
            tokens: {
              primary: "#4c44e4",
              primaryText: "#ebf0ff",
              secondary: "#525252",
              secondaryText: "#fafafa",
              accent: "#f2f0ff",
              accentText: "#895bf5",
              background: "#f5f5f5",
              text: "#171717",
              card: "#fafafa",
              cardText: "#171717",
              popover: "#e3e3e3",
              popoverText: "#171717",
              muted: "#a1a1a1",
              mutedText: "#171717",
              destructive: "#db2424",
              destructiveText: "#fef1f1",
              border: "#d4d4d4",
              input: "#d4d4d4",
              focusRing: "#4c44e4",
              chart: {
                chart1: "#7d89f7",
                chart2: "#a68af9",
                chart3: "#bf83fc",
                chart4: "#6065f0",
                chart5: "#737373"
              }
            }
          },
          fonts: {
            sans: "inter",
            serif: "playfair",
            mono: "jetbrains"
          },
          tree: [
            // 1. HERO SECTION
            {
              id: "hero-section",
              type: "section",
              styles: {
                background: "bg-brand-50",
                padding: "3xl"
              },
              children: [
                {
                  id: "hero-container",
                  type: "container",
                  props: {
                    maxWidth: "xl",
                    center: true
                  },
                  styles: {
                    padding: "md"
                  },
                  children: [
                      {
                        id: "hero-flex",
                        type: "flex",
                        props: {
                          direction: "column",
                          align: "center",
                          justify: "between",
                          wrap: false
                        },
                        styles: {
                          gap: "xl",
                          responsive: {
                            md: {
                              direction: "row",
                              gap: "2xl"
                            }
                          }
                        },
                      children: [
                        {
                          id: "hero-text-col",
                          type: "flex",
                          props: {
                            direction: "column"
                          },
                          styles: {
                            gap: "md",
                            flexBasis: "1/2",
                            responsive: {
                              md: {
                                flexBasis: "full",
                                alignItems: "center",
                                textAlign: "center"
                              }
                            }
                          },
                          children: [
                            {
                              id: "hero-title",
                              type: "text",
                              props: {
                                tag: "h1",
                                content: "Modern Dental Care for Your Family"
                              },
                              styles: {
                                typography: "display-sm",
                                color: "brand-900"
                              }
                            },
                            {
                              id: "hero-desc",
                              type: "text",
                              props: {
                                tag: "p",
                                content: "Experience painless treatments and a brighter smile with our state-of-the-art technology."
                              },
                              styles: {
                                typography: "lead",
                                color: "brand-700"
                              }
                            },
                            {
                              id: "hero-cta",
                              type: "button",
                              props: {
                                label: "Book Appointment",
                                variant: "primary"
                              },
                              styles: {
                                margin: "md"
                              }
                            }
                          ]
                        },
                        {
                          id: "hero-image",
                          type: "image",
                          props: {
                            src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
                            alt: "Modern Dental Office",
                            uploadWidth: 600,
                            uploadHeight: 400,
                            objectFit: "cover"
                          },
                          styles: {
                            radius: "xl",
                            shadow: "2xl",
                            flexBasis: "1/2",
                            aspectRatio: "4/3",
                            responsive: {
                              md: {
                                flexBasis: "full",
                                aspectRatio: "video-16-9"
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },

            // 2. SERVICES SECTION (Grid)
            {
              id: "services-section",
              type: "section",
              styles: {
                padding: "4xl",
                background: "bg-white"
              },
              children: [
                {
                  id: "services-container",
                  type: "container",
                  props: {
                    maxWidth: "lg",
                    center: true
                  },
                  styles: {
                    padding: "md"
                  },
                  children: [
                    {
                      id: "services-title",
                      type: "text",
                      props: {
                        tag: "h2",
                        content: "Our Services"
                      },
                      styles: {
                        typography: "heading-md",
                        color: "brand-900",
                        margin: "2xl",
                        textAlign: "center"
                      }
                    },
                    {
                      id: "services-grid",
                      type: "grid",
                      props: {
                        columns: 3
                      },
                      styles: {
                        gap: "xl",
                        responsive: {
                          md: { columns: "2" },
                          sm: { columns: "1" }
                        }
                      },
                      children: [
                        {
                          id: "service-1",
                          type: "flex",
                          props: { direction: "column" },
                          styles: {
                            gap: "md",
                            padding: "lg",
                            radius: "lg",
                            shadow: "sm",
                            background: "bg-surface",
                            borderWidth: "1",
                            borderColor: "border-subtle",
                            transition: "default",
                            hover: {
                              shadow: "lg",
                              borderColor: "brand-500",
                              background: "bg-brand-50"
                            }
                          },
                          children: [
                            {
                              id: "svc-1-title",
                              type: "text",
                              props: { tag: "h3", content: "Teeth Whitening" },
                              styles: { typography: "heading-sm", color: "brand-900" }
                            },
                            {
                              id: "svc-1-desc",
                              type: "text",
                              props: { tag: "p", content: "Get a brighter smile in just one session." },
                              styles: { color: "text-secondary", typography: "body-md" }
                            }
                          ]
                        },
                        {
                          id: "service-2",
                          type: "flex",
                          props: { direction: "column" },
                          styles: {
                            gap: "md",
                            padding: "lg",
                            radius: "lg",
                            shadow: "sm",
                            background: "bg-surface",
                            borderWidth: "1",
                            borderColor: "border-subtle",
                            transition: "default",
                            hover: {
                              shadow: "lg",
                              borderColor: "brand-500",
                              background: "bg-brand-50"
                            }
                          },
                          children: [
                            {
                              id: "svc-2-title",
                              type: "text",
                              props: { tag: "h3", content: "Root Canal" },
                              styles: { typography: "heading-sm", color: "brand-900" }
                            },
                            {
                              id: "svc-2-desc",
                              type: "text",
                              props: { tag: "p", content: "Painless root canal treatments." },
                              styles: { color: "text-secondary", typography: "body-md" }
                            }
                          ]
                        },
                        {
                          id: "service-3",
                          type: "flex",
                          props: { direction: "column" },
                          styles: {
                            gap: "md",
                            padding: "lg",
                            radius: "lg",
                            shadow: "sm",
                            background: "bg-surface",
                            borderWidth: "1",
                            borderColor: "border-subtle",
                            transition: "default",
                            hover: {
                              shadow: "lg",
                              borderColor: "brand-500",
                              background: "bg-brand-50"
                            }
                          },
                          children: [
                            {
                              id: "svc-3-title",
                              type: "text",
                              props: { tag: "h3", content: "Dental Implants" },
                              styles: { typography: "heading-sm", color: "brand-900" }
                            },
                            {
                              id: "svc-3-desc",
                              type: "text",
                              props: { tag: "p", content: "Permanent solutions for missing teeth." },
                              styles: { color: "text-secondary", typography: "body-md" }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },

            // 3. CTA SECTION
            {
              id: "cta-section",
              type: "section",
              styles: {
                padding: "4xl",
                background: "bg-brand-900"
              },
              children: [
                {
                  id: "cta-container",
                  type: "container",
                  props: { maxWidth: "lg", center: true },
                  styles: { textAlign: "center", gap: "lg" },
                  children: [
                    {
                      id: "cta-title",
                      type: "text",
                      props: { tag: "h2", content: "Ready for a Brighter Smile?" },
                      styles: { typography: "heading-lg", color: "text-inverse" }
                    },
                    {
                      id: "cta-desc",
                      type: "text",
                      props: { tag: "p", content: "Book your appointment today and get 20% off your first visit." },
                      styles: { typography: "lead", color: "text-brand-100", margin: "lg" }
                    },
                    {
                      id: "cta-button",
                      type: "button",
                      props: { label: "Schedule Now", variant: "primary" },
                      styles: {
                        background: "bg-white",
                        color: "brand-900",
                        hover: { background: "bg-brand-50" }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    });
  }

  return NextResponse.json({
    success: false,
    error: "Vendor not found"
  }, { status: 404 });
}
