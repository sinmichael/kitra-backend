import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsPrizeValue(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isPrizeValue',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const numValue = Number(value);
          return (
            typeof value === 'string' &&
            /^\d+$/.test(value && value.trim()) &&
            numValue >= 10 &&
            numValue <= 30
          );
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a whole number between 10 and 30`;
        },
      },
    });
  };
}
