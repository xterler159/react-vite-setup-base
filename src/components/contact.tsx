import { Form, useLocation, useParams } from 'react-router-dom'

import Favorite from './favorite'

export type ContactType = {
  first: string,
  last: string,
  avatar: string,
  twitter: string,
  notes: string,
  favorite: boolean,
}

type ContactURLParams = {
  contactId: string | undefined
}

const Contact = () => {
  const location = useLocation()
  const params = useParams<ContactURLParams>()

  const contact: ContactType = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  }

  return (
    <div id='contact'>
      <div>
        <img key={contact.avatar} src={contact.avatar || undefined} alt='avatar' />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target='_blank'
              href={`https://twitter.com/${contact.twitter}`}
              rel='noopener noreferrer'
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action='edit'>
            <button type='submit'>Edit</button>
          </Form>

          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (
                !confirm(
                  'Please confirm you want to delete this record.',
                )
              ) {
                event.preventDefault()
              }
            }}
          >
            <button type='submit'>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact