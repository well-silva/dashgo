import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string,
  password: string
}

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inv'),
  password: yup.string().required('Senha obrigatório')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding="8"
        borderRadius="8"
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      > 
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            { ...register('email') } 
            error={errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            {...register('password')}
            error={errors.password}
          />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
