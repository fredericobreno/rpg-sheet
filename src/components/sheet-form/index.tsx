'use client'

import { useForm } from 'react-hook-form'
import { Form } from '../ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { forwardRef } from 'react'
import { Section } from './section'
import { InputField } from './input-field'
import { RatingField } from './rating-field'
import { LOCAL_STORAGE_KEY } from '@/consts'

const formSchema = z.object({
  header: z.object({
    name: z.string(),
    player: z.string(),
    concept: z.string(),
    chronicle: z.string(),
    advantage: z.string(),
    disadvantage: z.string(),
  }),
  attributes: z.object({
    physical: z.object({
      strength: z.number(),
      dexterity: z.number(),
      stamina: z.number(),
    }),
    social: z.object({
      appearance: z.number(),
      charisma: z.number(),
      manipulation: z.number(),
    }),
    mental: z.object({
      intelligence: z.number(),
      reasoning: z.number(),
      perception: z.number(),
    }),
  }),
  skills: z.object({
    talents: z.object({
      quickness: z.number(),
      sports: z.number(),
      fighting: z.number(),
      dodging: z.number(),
      empathy: z.number(),
      expression: z.number(),
      intimidation: z.number(),
      leadership: z.number(),
      cunning: z.number(),
      smoothTalk: z.number(),
      animalHandling: z.number(),
      intuition: z.number(),
      primitiveInstinct: z.number(),
    }),
    expertise: z.object({
      etiquette: z.number(),
      performance: z.number(),
      crafts: z.number(),
      repair: z.number(),
      driving: z.number(),
      firearms: z.number(),
      meleeWeapons: z.number(),
      security: z.number(),
      stealth: z.number(),
      survivability: z.number(),
      deception: z.number(),
      interrogation: z.number(),
    }),
    knowledge: z.object({
      academicDegree: z.number(),
      computerScience: z.number(),
      politics: z.number(),
      bureaucracy: z.number(),
      law: z.number(),
      medicine: z.number(),
      linguistics: z.number(),
      theology: z.number(),
      occultism: z.number(),
      cryptozoology: z.number(),
      investigation: z.number(),
      sciences: z.number(),
    }),
  }),
})

export type FormType = z.infer<typeof formSchema>

export const SheetForm = forwardRef<HTMLFormElement>((_, ref) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      header: {
        name: '',
        player: '',
        concept: '',
        chronicle: '',
        advantage: '',
        disadvantage: '',
      },
      attributes: {
        physical: {
          strength: 0,
          dexterity: 0,
          stamina: 0,
        },
        social: {
          appearance: 0,
          charisma: 0,
          manipulation: 0,
        },
        mental: {
          intelligence: 0,
          reasoning: 0,
          perception: 0,
        },
      },
      skills: {
        talents: {
          quickness: 0,
          sports: 0,
          fighting: 0,
          dodging: 0,
          empathy: 0,
          expression: 0,
          intimidation: 0,
          leadership: 0,
          cunning: 0,
          smoothTalk: 0,
          animalHandling: 0,
          intuition: 0,
          primitiveInstinct: 0,
        },
        expertise: {
          etiquette: 0,
          performance: 0,
          crafts: 0,
          repair: 0,
          driving: 0,
          firearms: 0,
          meleeWeapons: 0,
          security: 0,
          stealth: 0,
          survivability: 0,
          deception: 0,
          interrogation: 0,
        },
        knowledge: {
          academicDegree: 0,
          computerScience: 0,
          politics: 0,
          bureaucracy: 0,
          law: 0,
          medicine: 0,
          linguistics: 0,
          theology: 0,
          occultism: 0,
          cryptozoology: 0,
          investigation: 0,
          sciences: 0,
        },
      },
    },
  })

  const onSubmit = (data: FormType) => {
    const rpgSheets = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || '[]',
    )
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...rpgSheets, data]),
    )
  }

  return (
    <Form {...form}>
      <form
        ref={ref}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <Section title="Header" collapsable contentCn="space-y-2">
          <InputField label="Name" name="header.name" />
          <InputField label="Player" name="header.player" />
          <InputField label="Concept" name="header.concept" />
          <InputField label="Chronicle" name="header.chronicle" />
          <InputField label="Advantage" name="header.advantage" />
          <InputField label="Disadvantage" name="header.disadvantage" />
        </Section>
        <Section title="Attributes" collapsable contentCn="flex justify-evenly">
          <Section title="Physical" shrink contentCn="space-y-2">
            <RatingField label="Strength" name="attributes.physical.strength" />
            <RatingField
              label="Dexterity"
              name="attributes.physical.dexterity"
            />
            <RatingField label="Stamina" name="attributes.physical.stamina" />
          </Section>
          <Section title="Social" shrink contentCn="space-y-2">
            <RatingField
              label="Appearance"
              name="attributes.social.appearance"
            />
            <RatingField label="Charisma" name="attributes.social.charisma" />
            <RatingField
              label="Manipulation"
              name="attributes.social.manipulation"
            />
          </Section>
          <Section title="Mental" shrink contentCn="space-y-2">
            <RatingField
              label="Intelligence"
              name="attributes.mental.intelligence"
            />
            <RatingField label="Reasoning" name="attributes.mental.reasoning" />
            <RatingField
              label="Perception"
              name="attributes.mental.perception"
            />
          </Section>
        </Section>
        <Section title="Skills" collapsable contentCn="flex justify-evenly">
          <Section title="Talents" shrink contentCn="space-y-2">
            <RatingField label="Quickness" name="skills.talents.quickness" />
            <RatingField label="Sports" name="skills.talents.sports" />
            <RatingField label="Fighting" name="skills.talents.fighting" />
            <RatingField label="Dodging" name="skills.talents.dodging" />
            <RatingField label="Empathy" name="skills.talents.empathy" />
            <RatingField label="Expression" name="skills.talents.expression" />
            <RatingField
              label="Intimidation"
              name="skills.talents.intimidation"
            />
            <RatingField label="Leadership" name="skills.talents.leadership" />
            <RatingField label="Cunning" name="skills.talents.cunning" />
            <RatingField label="Smooth Talk" name="skills.talents.smoothTalk" />
            <RatingField
              label="Animal Handling"
              name="skills.talents.animalHandling"
            />
            <RatingField label="Intuition" name="skills.talents.intuition" />
            <RatingField
              label="Primitive Instinct"
              name="skills.talents.primitiveInstinct"
            />
          </Section>
          <Section title="Expertise" shrink contentCn="space-y-2">
            <RatingField label="Etiquette" name="skills.expertise.etiquette" />
            <RatingField
              label="Performance"
              name="skills.expertise.performance"
            />
            <RatingField label="Crafts" name="skills.expertise.crafts" />
            <RatingField label="Repair" name="skills.expertise.repair" />
            <RatingField label="Driving" name="skills.expertise.driving" />
            <RatingField label="Firearms" name="skills.expertise.firearms" />
            <RatingField
              label="Melee Weapons"
              name="skills.expertise.meleeWeapons"
            />
            <RatingField label="Security" name="skills.expertise.security" />
            <RatingField label="Stealth" name="skills.expertise.stealth" />
            <RatingField
              label="Survivability"
              name="skills.expertise.survivability"
            />
            <RatingField label="Deception" name="skills.expertise.deception" />
            <RatingField
              label="Interrogation"
              name="skills.expertise.interrogation"
            />
          </Section>
          <Section title="Knowledge" shrink contentCn="space-y-2">
            <RatingField
              label="Academic Degree"
              name="skills.knowledge.academicDegree"
            />
            <RatingField
              label="Computer Science"
              name="skills.knowledge.computerScience"
            />
            <RatingField label="Politics" name="skills.knowledge.politics" />
            <RatingField
              label="Bureaucracy"
              name="skills.knowledge.bureaucracy"
            />
            <RatingField label="Law" name="skills.knowledge.law" />
            <RatingField label="Medicine" name="skills.knowledge.medicine" />
            <RatingField
              label="Linguistics"
              name="skills.knowledge.linguistics"
            />
            <RatingField label="Theology" name="skills.knowledge.theology" />
            <RatingField label="Occultism" name="skills.knowledge.occultism" />
            <RatingField
              label="Cryptozoology"
              name="skills.knowledge.cryptozoology"
            />
            <RatingField
              label="Investigation"
              name="skills.knowledge.investigation"
            />
            <RatingField label="Sciences" name="skills.knowledge.sciences" />
          </Section>
        </Section>
      </form>
    </Form>
  )
})
SheetForm.displayName = 'SheetForm'
