import Container from './container';
import cn from 'classnames';

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b dark:bg-gray-900 dark:text-white', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}>
      <Container>
        <div className='py-2 text-sm text-center'>
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href='/api/exit-preview'
                className='underline transition-colors duration-200 hover:text-cyan'>
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              Contact us at{' '}
              <a
                href='mailto:support@axieschool.it'
                className='underline transition-colors duration-200 hover:text-success'>
                support@axieschool.it
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
