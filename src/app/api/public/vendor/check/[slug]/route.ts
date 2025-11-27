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
          tree: [
            {
              id: "hero-section",
              type: "section",
              styles: {
                background: "brand-50",
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
                        direction: "row",
                        align: "center",
                        justify: "between",
                        wrap: false
                      },
                      styles: {
                        gap: "xl"
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
                            maxWidth: "lg",
                            flex: "1"
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
                                typography: "h1",
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
                                typography: "body-lg",
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
                            "alt": "Modern Dental Office",
                            width: 600,
                            height: 400,
                            objectFit: "cover"
                          },
                          styles: {
                            radius: "xl",
                            shadow: "2xl",
                            maxWidth: "full"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "services-section",
              type: "section",
              styles: {
                padding: "4xl",
                background: "white"
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
                      "type": "text",
                      props: {
                        tag: "h2",
                        content: "Our Services"
                      },
                      styles: {
                        typography: "h2",
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
                        gap: "xl"
                      },
                      children: [
                        {
                          id: "service-1",
                          type: "flex",
                          props: {
                            direction: "column"
                          },
                          styles: {
                            gap: "md",
                            padding: "lg",
                            radius: "lg",
                            shadow: "sm",
                            background: "white"
                          },
                          children: [
                            {
                              id: "svc-1-title",
                              type: "text",
                              props: { tag: "h3", content: "Teeth Whitening" },
                              styles: { typography: "h3", color: "brand-900" }
                            },
                            {
                              id: "svc-1-desc",
                              type: "text",
                              props: { tag: "p", content: "Get a brighter smile in just one session." },
                              styles: { color: "neutral-600" }
                            }
                          ]
                        },
                        {
                          id: "service-2",
                          type: "flex",
                          props: {
                            direction: "column"
                          },
                          styles: {
                            gap: "md",
                            padding: "lg",
                            radius: "lg",
                            shadow: "sm",
                            background: "white"
                          },
                          children: [
                            {
                              id: "svc-2-title",
                              type: "text",
                              props: { tag: "h3", content: "Root Canal" },
                              styles: { typography: "h3", color: "brand-900" }
                            },
                            {
                              id: "svc-2-desc",
                              type: "text",
                              props: { tag: "p", content: "Painless root canal treatments." },
                              styles: { color: "neutral-600" }
                            }
                          ]
                        },
                        {
                          id: "service-3",
                          type: "flex",
                          props: {
                            direction: "column"
                          },
                          styles: {
                            gap: "md",
                            padding: "lg",
                            radius: "lg",
                            shadow: "sm",
                            background: "white"
                          },
                          children: [
                            {
                              id: "svc-3-title",
                              type: "text",
                              props: { tag: "h3", content: "Dental Implants" },
                              styles: { typography: "h3", color: "brand-900" }
                            },
                            {
                              id: "svc-3-desc",
                              type: "text",
                              props: { tag: "p", content: "Permanent solutions for missing teeth." },
                              styles: { color: "neutral-600" }
                            }
                          ]
                        }
                      ]
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
