//@ts-check

//* Libraries imports
import z from "zod";

const themeSchema = z.object({
  extend: z.object({
    colors: z.object({
      base: z.object({
        red: z.object({
          dark: z.string(),
          mid: z.string(),
          light: z.string(),
        }),
        green: z.object({
          dark: z.string(),
          mid: z.string(),
          light: z.string(),
        }),
        gray: z.object({
          1: z.string(),
          2: z.string(),
          3: z.string(),
          4: z.string(),
          5: z.string(),
          6: z.string(),
          7: z.string(),
        })
      })
    }),
    fontFamily: z.object({
      nunito: z.object({
        regular: z.string(),
        bold: z.string(),
      }),
      nunitoSans: z.object({
        regular: z.string(),
        bold: z.string(),
      }),
    })
  }),
});

export const theme = themeSchema.parse({
  extend: {
    colors: {
      base: {
        red: {
          dark: "#BF3B44",
          mid: "#F3BABD",
          light: "#F4E6E7",
        },
        green: {
          dark: "#639339",
          mid: "#CBE4B4",
          light: "#E5F0DB",
        },
        gray: {
          1: "#1B1D1E",
          2: "#333638",
          3: "#5C6265",
          4: "#B9BBBC",
          5: "#DDDEDF",
          6: "#EFF0F0",
          7: "#FAFAFA",
        }
      }
    },
    fontFamily: {
      nunito: {
        regular: "Nunito_400Regular",
        bold: "Nunito_700Bold",
      },
      nunitoSans: {
        regular: "NunitoSans_400Regular",
        bold: "NunitoSans_700Bold",
      }
    }
  },
});