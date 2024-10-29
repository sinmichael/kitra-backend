import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcryptjs';

export class InsertInitialUsersData1730194996020 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const passwordHash1 = await bcrypt.hash('123123', 10);
    const passwordHash2 = await bcrypt.hash('234234', 10);
    const passwordHash3 = await bcrypt.hash('345345', 10);
    const passwordHash4 = await bcrypt.hash('456456', 10);
    const passwordHash5 = await bcrypt.hash('567567', 10);
    const passwordHash6 = await bcrypt.hash('678678', 10);

    await queryRunner.query(`
            INSERT INTO users (id, name, age, password, email) VALUES
            (3000, 'U1', 21, '${passwordHash1}', 'u1@kitra.abc'),
            (3001, 'U2', 51, '${passwordHash2}', 'u2@kitra.abc'),
            (3002, 'U3', 31, '${passwordHash3}', 'u3@kitra.abc'),
            (3003, 'U4', 18, '${passwordHash4}', 'u4@kitra.abc'),
            (3004, 'U5', 21, '${passwordHash5}', 'u5@kitra.abc'),
            (3005, 'U6', 35, '${passwordHash6}', 'u6@kitra.abc');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM users WHERE id BETWEEN 3000 AND 3005;
        `);
  }
}
