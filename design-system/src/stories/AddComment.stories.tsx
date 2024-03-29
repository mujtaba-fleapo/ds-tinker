// AddComment.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { AddComment } from '../components/post/AddComment';

const meta: Meta<typeof AddComment> = {
  component: AddComment,
  title: '4. Components/AddComment ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AddComment>;

export const DesktopAddComment: Story = {
  render: (): JSX.Element => <Alert color="error">{`use AddComment`}</Alert>
};

DesktopAddComment.storyName = 'DeskTopAddComment';

export const MobileAddComment: Story = {
  render: (): JSX.Element => <Alert color="error">{`use AddComment`}</Alert>
};

MobileAddComment.storyName = 'MobileAddComment';

export const Brand: Story = {
  args: {
    onSubmit: (comment: string) => {
      console.log(`Submitted comment: ${comment}`);
    }
  }
};

Brand.storyName = 'AddComment';

export const Spanish: Story = {
  args: {
    onSubmit: (comment: string) => {
      console.log(`Submitted comment: ${comment}`);
    },
    postText: 'publicación',
    writeCommentText: 'Escribe un comentario...'
  }
};

Spanish.storyName = 'AddComment Es';

Brand.storyName = 'AddComment';

export const Arabic: Story = {
  args: {
    onSubmit: (comment: string) => {
      console.log(`Submitted comment: ${comment}`);
    },
    locale: 'ar',
    postText: 'ارسل',
    writeCommentText: 'اكتب تعليق'
  }
};

Arabic.storyName = 'AddComment ar';

const FigmaPreview = (props: any): JSX.Element => {
  return (
    <div
      style={{
        width: '90vw',
        height: '90vh'
      }}
    >
      <Box>
        {props.notImplemented && (
          <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
            NOT IMPLEMENTED
          </Typography>
        )}
        {props.inprogress && (
          <Typography variant="body1" gutterBottom sx={{ color: 'orange' }}>
            IN PROGRESS
          </Typography>
        )}
        {props.ok && (
          <Typography variant="body1" gutterBottom sx={{ color: 'green' }}>
            VERIFIED
          </Typography>
        )}
        <Link target="_blank" href={props.url} variant="body1">
          URL: {props.url}
        </Link>
      </Box>
      <iframe
        title="Figma Preview"
        style={{ border: '1px dotted black' }}
        width="100%"
        height="100%"
        src={props.url}
      ></iframe>
    </div>
  );
};

export const Figma: Story = {
  render: (): JSX.Element => (
    <FigmaPreview
      ok
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D12%253A698%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
