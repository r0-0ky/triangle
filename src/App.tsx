import { useEffect, useState } from 'react';
import GridPattern from './components/ui/grid-pattern';
import { RainbowButton } from './components/ui/rainbow-button';
import SparklesText from './components/ui/sparkles-text';
import LetterPullup from './components/ui/letter-pullup';
import { Input } from './components/ui/input';
import { generatePascalTriangle } from './utils/generate-triangle';
import { ConfettiCustomShapes } from './components/ui/confeti-custom-shapes';

function App() {
  const [isCreate, setIsCreate] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = () => {
    setIsLoading(true)
    setIsCreate(true)
  }
  const interval = () => setTimeout(() => setIsLoading(false), 3000)

  useEffect(() => {
    interval()
    return () => {
      interval()
    }
  }, [isCreate])

  return (
    <main className="h-screen relative w-full flex-col flex items-center justify-center p-5 gap-10">
      { !isCreate ? 
        <>
          <SparklesText className='text-center text-[50px]' text='Создай треугольник пифагора!' />
          <form name='form' id='1' onSubmit={handleSubmit} className='flex items-center gap-5'>
            <Input minLength={1} onChange={(e) => setInputValue(e.currentTarget.value)} value={inputValue} required type='number' placeholder='Количество строк' />
            <RainbowButton type='submit'>Создать</RainbowButton>
          </form>
        </>
      :
        isLoading ? 
          <LetterPullup words='Загрузка...' /> 
        :
        <>
          <h1 className=' font-bold'>Круто! 🤩</h1>
          <div className={`w-[100%] h-[60%] p-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-black border-[2px] flex flex-col rounded-md overflow-auto`}>
            {generatePascalTriangle(+inputValue + 1).map((item: number[]) => (
              <div className='flex gap-[1px]'>
                {item.map((value, index) => (
                  <span className='px-2 py-1  box-content flex items-center bg-white border-[2px] border-black rounded-md justify-center' key={index}>
                    <span>{value}</span>
                  </span>
                ))}
              </div>
            ))}
            <ConfettiCustomShapes />
          </div>
          <a className='absolute left-5 top-5 text-black text-lg font-semibold' href="/">Назад</a>
        </>
      }
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className='inset-x-0 z-[-10] inset-y-[-30%] skew-y-12 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]'
      />
    </main>
  )
}

export default App
