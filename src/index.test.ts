import { describe, expect, it } from 'vitest';

import {
  Badge,
  Button,
  Checkbox,
  FormField,
  Input,
  Label,
  Modal,
  Select,
  Textarea,
  Typography,
} from './index';

describe('package exports', () => {
  it('exports all public components', () => {
    expect(Badge).toBeTruthy();
    expect(Button).toBeTruthy();
    expect(Checkbox).toBeTruthy();
    expect(FormField).toBeTruthy();
    expect(Input).toBeTruthy();
    expect(Label).toBeTruthy();
    expect(Modal).toBeTruthy();
    expect(Select).toBeTruthy();
    expect(Textarea).toBeTruthy();
    expect(Typography).toBeTruthy();
  });
});
